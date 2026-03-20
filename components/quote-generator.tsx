"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { text: "If you are working on something exciting, it will keep you going.", author: "Steve Jobs" },
  { text: "People who are crazy enough to change the world are the ones who do.", author: "Rob Siltanen" },
];

export function QuoteGenerator() {
  const [index, setIndex] = useState(0);

  const newQuote = () => {
    setIndex(Math.floor(Math.random() * quotes.length));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg text-center">
      <p className="text-2xl font-semibold text-gray-800 mb-4">"{quotes[index].text}"</p>
      <p className="text-gray-500 mb-8">— {quotes[index].author}</p>
      <Button
        onClick={newQuote}
        className="rounded-full bg-purple-500 hover:bg-purple-600 text-white font-bold"
      >
        New Quote ✨
      </Button>
    </div>
  );
}
