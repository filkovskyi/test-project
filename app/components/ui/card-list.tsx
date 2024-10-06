"use client";

import { useState } from "react";
import { Card } from "./card";

interface CardData {
  cards: Array<{
    id: string;
    status: string;
    name: string;
    subject: string;
    time: string;
    longSubject?: string;
    buttons?: string[];
  }>;
  onDeleteCard: (id: string) => void;
}

const ITEMS_PER_PAGE = 5;

export function CardList({ cards, onDeleteCard }: CardData) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<keyof CardData["cards"][0]>("time");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const sortedCards = [...cards].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (aValue === undefined || bValue === undefined) {
      return 0;
    }

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentCards = sortedCards.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
  const handleSort = (field: keyof CardData["cards"][0]) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div>
          <button
            onClick={() => handleSort("status")}
            className="mr-2 px-2 py-1 bg-gray-200 rounded"
          >
            Sort by User
          </button>
          <button
            onClick={() => handleSort("time")}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            Sort by Time
          </button>
        </div>
        <div>
          Page {currentPage} of {totalPages}
        </div>
      </div>
      {currentCards.map((card) => (
        <Card
          key={card.id}
          {...card}
          onDelete={onDeleteCard}
        />
      ))}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="mx-1 px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
