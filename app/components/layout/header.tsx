import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/hooks/useTheme";
import { Button, IconButton } from "@/app/components/ui/button";
import { Logo } from "@/app/components/ui/icons/logo";

interface HeaderProps {
  onOpenSidebar: () => void;
}

export function Header({ onOpenSidebar }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="p-4 shadow flex justify-between items-center">
      <IconButton
        onClick={onOpenSidebar}
        variant="link"
        icon={Menu}
        className="text-text hover:text-text/80 md:hidden"
        aria-label="Open sidebar"
      />
      <nav className="hidden md:flex space-x-4">
        <Button variant="link" href="/" className="flex items-center">
          <Logo className="w-12 h-12 mr-2" />
        </Button>
      </nav>
      <div className="flex items-center space-x-4">
        <IconButton
          onClick={toggleTheme}
          variant="link"
          icon={theme === "light" ? Moon : Sun}
          className="text-text hover:text-text/80"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        />
      </div>
    </header>
  );
}
