"use client";

import { useState } from "react";

import { createChatResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";

export function Chat() {
  const [userQuestion, setUserQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const {
    mutate: createMessage,
    isPending,
    data,
  } = useMutation({
    mutationFn: (question) => createChatResponse([...messages, question]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Oops, something went wrong from our side");
      }
      setMessages((curr) => [...curr, data]);
    },
    onError: (error) => {
      toast.error("Oops, something went wrong from our side");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuery = { role: "user", content: userQuestion };
    createMessage(newQuery);
    setMessages((curr) => [...curr, newQuery]);
    setUserQuestion("");
  };

  return (
    <div className="min-h-[calc(93vh-3rem)] flex flex-col pb-5 border rounded-xl my-6 border-base-100 bg-base-200 w-[75vw]">
      <div className="flex-grow overflow-y-auto p-5 max-w-5xl w-full mx-auto">
        <h2 className="text-4xl pb-5">Have Any doubts?</h2>

        {/* Example Messages */}
        <div className="space-y-4">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg max-w-lg w-full break-words">
              User's question or message will go here
            </div>
          </div>

          {/* System Message */}
          <div className="flex justify-start">
            <div className="bg-gray-200 text-black p-3 rounded-lg max-w-lg w-full break-words">
              System's response will go here
            </div>
          </div>
        </div>
      </div>

      <form className="w-full max-w-5xl mx-auto p-4" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2 w-full">
          <input
            className="input input-bordered flex-grow p-3 rounded-lg w-full"
            type="text"
            placeholder="Type your message..."
            required
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
          />
          <button className="btn btn-primary px-4 py-2" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
