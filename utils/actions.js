"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const createChatResponse = async (chatConversation) => {
  try {
    const res = await openai.chat.completions.create({
      messages: [{ role: "system", content: "you are an experienced helpful tour guide" }, ...chatConversation],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    console.log(res.choices[0].message);
    return res.choices[0].message;
  } catch (error) {
    return null;
  }
};
