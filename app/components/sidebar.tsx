import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      fixed inset-y-0 left-0 z-50 w-64 bg-slate-400 transition-transform duration-300 ease-in-out
      md:translate-x-0 md:static md:inset-auto md:flex md:w-64 md:flex-col
    `}
    >
      <div className="flex items-center justify-between p-4 md:hidden">
        <span className="text-xl font-semibold">Dashboard</span>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-600">
          <X size={24} />
        </button>
      </div>
      <div className="flex-grow p-4">
        <div className="bg-slate-600 h-64 mb-4">
          <h2 className="text-white p-4">Main menu UI block</h2>
        </div>
      </div>
      <button className="bg-slate-300 p-2 m-4">Log out button</button>
    </aside>
  );
}
