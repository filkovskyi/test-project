"use client";

import { useState } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { Footer } from "./footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-grow w-full md:w-[calc(100%-16rem)]">
        <Header onOpenSidebar={() => setSidebarOpen(true)} />

        <ScrollArea.Root className="flex-grow">
          <ScrollArea.Viewport className="w-full h-full">
            <main className="p-6">{children}</main>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>

        <Footer />
      </div>
    </div>
  );
}
