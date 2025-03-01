"use client";

import { useState } from "react";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { isApiKeyConfigured } from "@/lib/openai";
import { formatDate } from "@/lib/utils";

export default function ChatPage() {
  const [inputValue, setInputValue] = useState("");
  
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    onFinish: () => {
      // Scroll to bottom when message is complete
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    handleSubmit(e);
    setInputValue("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <h1 className="text-xl font-bold">AI Chat</h1>
          <Button variant="outline" onClick={() => window.location.href = "/"}>
            Back to Home
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-6">
        {!isApiKeyConfigured && (
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-200 mb-6">
            <h3 className="text-lg font-semibold">API Key Not Configured</h3>
            <p>
              Please add your OpenAI API key to the .env.local file to enable the
              chat functionality.
            </p>
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200 mb-6">
            <h3 className="text-lg font-semibold">Error</h3>
            <p>{error.message}</p>
          </div>
        )}

        <div className="space-y-6 mb-12">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-2">Welcome to AI Chat!</h2>
              <p className="text-muted-foreground">
                Start a conversation by typing a message below.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex flex-col ${
                  message.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[80%] md:max-w-[70%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  {formatDate(new Date(message.createdAt || Date.now()))}
                </span>
              </div>
            ))
          )}
        </div>
      </main>

      <footer className="sticky bottom-0 border-t bg-background/80 backdrop-blur-sm">
        <div className="container py-4">
          <form onSubmit={onSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                handleInputChange(e);
                setInputValue(e.target.value);
              }}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={!isApiKeyConfigured || isLoading}
            />
            <Button type="submit" disabled={!isApiKeyConfigured || isLoading || input.trim() === ""}>
              {isLoading ? "Thinking..." : "Send"}
            </Button>
          </form>
        </div>
      </footer>
    </div>
  );
}
