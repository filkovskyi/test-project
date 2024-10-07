import React from "react";
import { X } from "lucide-react";
import { Button, IconButton } from "@/app/components/ui/button";
import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Calendar,
  Settings,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        fixed inset-y-0 left-0 z-50 w-64 transition-all duration-300 ease-in-out bg-gray-300 dark:bg-black
        md:translate-x-0 md:static md:inset-auto md:flex md:w-64 md:flex-col
      `}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 md:hidden">
        <IconButton
          onClick={onClose}
          variant="link"
          icon={X}
          className="text-text hover:text-text/80 md:hidden"
          aria-label="close sidebar"
        />
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
          <nav className="space-y-4">
            {[
              { href: "/", icon: LayoutDashboard, label: "Dashboard" },
              { href: "/projects", icon: FolderKanban, label: "Projects" },
              { href: "/tasks", icon: CheckSquare, label: "Tasks" },
              { href: "/calendar", icon: Calendar, label: "Calendar" },
              { href: "/settings", icon: Settings, label: "Settings" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <item.icon className="mr-3" size={20} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <Button variant="primary" className="w-full">
          Log out
        </Button>
      </div>
    </aside>
  );
}
