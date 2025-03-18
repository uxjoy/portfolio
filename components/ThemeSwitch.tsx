"use client";

import { RiComputerLine, RiMoonClearFill, RiSunFill } from "@remixicon/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="p-2 rounded-full">
        <RiComputerLine
          size={20}
          className="text-slate-800 dark:text-white/80"
        />
      </div>
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        className="p-2 rounded-full hover:bg-zinc-900 outline-none border-none ease-in-out duration-200"
        onClick={() => setTheme("light")}
        aria-label="Theme-Switch"
      >
        <RiSunFill size={20} className="text-amber-400" />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        className="p-2 rounded-full hover:bg-slate-100 outline-none border-none ease-in-out duration-200"
        onClick={() => setTheme("dark")}
        aria-label="Theme-Switch"
      >
        <RiMoonClearFill size={20} className="text-gray-800" />
      </button>
    );
  }
}
