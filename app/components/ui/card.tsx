"use client";

import { useState } from "react";
import { Badge } from "./badge";
import { Typography } from "./typography";
import { IconButton } from "@/app/components/ui/button";
import { ChevronDown, ChevronUp, X } from "lucide-react";

interface CardProps {
  id: string;
  status: string;
  name: string;
  subject: string;
  time: string;
  longSubject?: string;
  badges?: string[];
  onDelete: (id: string) => void;
  onAction?: () => void;
}

export function Card({
  id,
  status,
  name,
  subject,
  time,
  longSubject,
  onDelete,
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div
      className="bg-gray-200 rounded-lg p-4 mb-4 transition-all duration-300 ease-in-out cursor-pointer"
      onClick={toggleExpand}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-grow">
          <Badge variant="success">{status}</Badge>
          <div className="flex-grow">
            <Typography variant="h4">{name}</Typography>
            <Typography variant="body2">{subject}</Typography>
          </div>
          <Badge variant="primary">{time}</Badge>
        </div>
        <div className="flex items-center space-x-4">
          {isExpanded ? (
            <ChevronUp size={20} className="text-gray-600" />
          ) : (
            <ChevronDown size={20} className="text-gray-600" />
          )}
          <IconButton
            onClick={handleDelete}
            variant="link"
            icon={X}
            className="text-text hover:text-text/80"
            aria-label="delete card"
          />
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <Typography variant="body1" className="text-gray-600">
            {longSubject || subject}
          </Typography>
        </div>
      )}
    </div>
  );
}
