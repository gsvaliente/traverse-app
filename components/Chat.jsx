"use client";

import { useState } from "react";

import { createChatResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";

export function Chat() {
  const [userQuestion, setUserQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate: createMessage, isPending } = useMutation({
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
    <div className="h-[calc(100vh-12rem)] flex flex-col pb-5 border rounded-xl my-14 border-base-100 bg-base-200 w-[70vw] mx-auto">
      <div className="flex-grow overflow-y-auto p-5">
        <div className="space-y-4">
          {messages.map((message, index) => {
            const { role, content } = message;
            const textColors = role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black";
            const position = role === "user" ? "justify-end" : "justify-start";

            return (
              <div key={index} className={`flex ${position}`}>
                <div className={`${textColors} p-3 rounded-xl max-w-lg w-fit break-words`}>{content}</div>
              </div>
            );
          })}
          {isPending && <span className="loading loading-dots"></span>}
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
          <button className="btn btn-primary px-4 py-2" type="submit" disabled={isPending}>
            {isPending ? "Working on it" : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}
