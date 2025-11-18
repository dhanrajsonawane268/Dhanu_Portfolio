"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="px-2" disabled>
        <SunIcon className="h-[1.2rem] w-[1.2rem] opacity-0" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Light Mode Icon */}
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-yellow-500 dark:hidden" />

      {/* Dark Mode Icon */}
      <MoonIcon className="hidden dark:block h-[1.2rem] w-[1.2rem] text-blue-300" />
    </Button>
  );
}
