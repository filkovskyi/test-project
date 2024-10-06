"use client";

import { useState } from "react";

interface CardProps {
  status: string;
  name: string;
  subject: string;
  time: string;
  longSubject?: string;
  buttons?: string[];
}

export function Card({
  status,
  name,
  subject,
  time,
  longSubject,
  buttons,
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    if (isExpanded && e.target === e.currentTarget) {
      setIsExpanded(false);
    } else if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const statusColor = status === "Status" ? "bg-emerald-500" : "bg-violet-400";

  return (
    <div
      className={`bg-gray-200 rounded-lg p-4 mb-4 cursor-pointer transition-all duration-300 ease-in-out ${
        isExpanded ? "h-auto" : "h-20"
      }`}
      onClick={toggleExpand}
    >
      <div className="flex justify-between items-center">
        <span className={`${statusColor} text-white px-2 py-1 rounded`}>
          {status}
        </span>
        <span className="text-violet-400">{time}</span>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold">{name}</h3>
        {!isExpanded && <p className="text-gray-600 truncate">{subject}</p>}
      </div>
      {isExpanded && (
        <div className="mt-4">
          <p className="text-gray-600">{longSubject || subject}</p>
          {buttons && (
            <div className="mt-4 flex flex-wrap gap-2">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className="bg-cyan-400 text-white px-3 py-1 rounded"
                >
                  {button}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
