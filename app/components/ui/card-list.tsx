"use client";

import { Button } from '@/app/components/ui/button';
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

const ITEMS_PER_PAGE = 10;

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
    <>
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
          <Button
            onClick={() => handleSort("status")}
            variant="primary"
            size="sm"
          >
            Sort by User
          </Button>
          <Button
            onClick={() => handleSort("time")}
            variant="primary"
            size="sm"
          >
            Sort by Time
          </Button>
        </div>
        <div className="text-sm">
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
      <div className="mt-4 flex justify-center gap-2">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant="primary"
          size="sm"
        >
          Previous
        </Button>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          variant="primary"
          size="sm"
        >
          Next
        </Button>
      </div>
    </>
  );
}
