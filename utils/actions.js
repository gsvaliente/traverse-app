"use server";

import OpenAI from "openai";

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

  const query = `Find a ${city} in ${country}.
If ${city} in ${country} exists, create a list of ${tourType} things can do in this ${city},${country}.
Once you have a list, create a ${tourLength}-day tour. Response should be in the following JSON format:
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "description of the city and tour",
    "sights": ["short paragraph of sight 1 ", "short paragraph of sight 2","short paragraph of sight 3"]
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
