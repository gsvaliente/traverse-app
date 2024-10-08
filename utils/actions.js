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

  console.log(destination);
  return "success";
};
