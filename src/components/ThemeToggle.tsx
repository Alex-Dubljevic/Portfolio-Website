"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="size-4 text-orange-300 transition-all duration-200 ease-in-out hover:scale-125"/>
      ) : (
        <MoonIcon className="size-4 text-indigo-500 transition-all duration-200 ease-in-out hover:scale-125"/>
      )}
      <span className="sr-only">Theme Toggle</span>
    </Button>
  );
}
