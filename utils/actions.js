"use server";

import { currentUser } from "@clerk/nextjs/server";
import OpenAI from "openai";
import prisma from "./db";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// CHAT
export const createChatResponse = async (chatConversation) => {
  try {
    const res = await openai.chat.completions.create({
      messages: [{ role: "system", content: "you are an experienced helpful tour guide" }, ...chatConversation],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    return res.choices[0].message;
  } catch (error) {
    return null;
  }
};

// TOUR CREATION

export const createTourResponse = async (destination) => {
  const { city, country, tourType, tourLength } = destination;
  // city = city.toLowerCase().charAt(0).toUpperCase() + city.slice(1);
  // country = country.toLowerCase().charAt(0).toUpperCase() + country.slice(1);

  const query = `Find a ${city} in ${country}.
If ${city} in ${country} exists, create a list of ${tourType} things can do in this ${city},${country}.
Once you have a list, create a ${tourLength}-day tour. Response should be in the following JSON format:
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "tourType":"${tourType}",
    "tourLength":"${tourLength}",
    "title": "title of the tour",
    "description": "description of the city and tour",
    "sights": ["short paragraph of sight 1 ", "short paragraph of sight 2","short paragraph of sight 3", "short paragraph of sight 4"]
  }
}
If no information on exact ${city}, or ${city} exists, or it's population is less than 100, or it is not located in the following ${country} return { "tour": null }, with no additional characters.`;

  try {
    const res = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are an experienced tour guide" },
        { role: "user", content: query },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    const tour = JSON.parse(res.choices[0].message.content);

    if (!tour.tour) {
      return null;
    }

    console.log(tour.tour);
    return tour.tour;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createNewUniqueTour = async (tour) => {
  const user = await currentUser();

  return prisma.tour.create({
    data: {
      ...tour,
      city: tour.city.toLowerCase(),
      country: tour.country.toLowerCase(),
      userId: user.id,
    },
  });
};

export const getExistingTour = async (tour) => {
  const user = await currentUser();

  const { city, country, tourType, tourLength } = tour;

  return prisma.tour.findUnique({
    where: {
      userId: user.id,
      city_country_tourType_tourLength: {
        city: city.toLowerCase(),
        country: country.toLowerCase(),
        tourType,
        tourLength,
      },
    },
  });
};

export const getAllTours = async (searchQuery) => {
  const user = await currentUser();

  if (!searchQuery) {
    const tourList = prisma.tour.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        city: "asc",
        // tourType: "asc",
      },
    });

    return tourList;
  }

  const tourList = await prisma.tour.findMany({
    where: {
      userId: user.id,
      OR: [
        {
          city: {
            contains: searchQuery,
          },
        },
        {
          country: {
            contains: searchQuery,
          },
        },
      ],
    },
    orderBy: {
      city: "asc",
      // tourType: "asc",
    },
  });

  return tourList;
};
