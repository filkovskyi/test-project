import { Menu } from "lucide-react";

interface HeaderProps {
  onOpenSidebar: () => void;
}

export function Header({ onOpenSidebar }: HeaderProps) {
  return (
    <header className="bg-white p-4 shadow flex justify-between items-center">
      <button
        onClick={onOpenSidebar}
        className="text-gray-500 hover:text-gray-600 md:hidden"
      >
        <Menu size={24} />
      </button>
      <button className="bg-slate-300 px-4 py-2">Header button</button>
    </header>
  );
}
