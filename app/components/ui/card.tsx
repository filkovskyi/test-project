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

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div
      className="bg-gray-200 rounded-lg p-3 sm:p-4 mb-4 transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-300"
      onClick={toggleExpand}
    >
      <div className="flex flex-row justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-0">
          <Badge variant="success" className="text-xs sm:text-sm">
            {status}
          </Badge>
          <div className="flex-grow min-w-0">
            <Typography variant="h4" className=" text-sm sm:text-base">
              {name}
            </Typography>
            <Typography variant="body2" className=" text-xs sm:text-sm">
              {subject}
            </Typography>
          </div>
        </div>
        <div className="flex items-center justify-between sm:justify-end sm:space-x-2">
          <Badge variant="primary" className="hidden sm:flex sm:text-sm">
            {time}
          </Badge>
          <div className="flex items-center space-x-1 sm:space-x-2">
            {isExpanded ? (
              <ChevronUp size={16} className="text-gray-600" />
            ) : (
              <ChevronDown size={16} className="text-gray-600" />
            )}
            <IconButton
              onClick={handleDelete}
              variant="link"
              icon={X}
              className="text-accent hover:text-red-800"
              aria-label="delete card"
              size="sm"
            />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-3 sm:mt-4 pl-4 sm:pl-16">
          <Typography
            variant="body1"
            className="text-gray-600 text-sm sm:text-base"
          >
            {longSubject || subject}
          </Typography>
        </div>
      )}
    </div>
  );
}
