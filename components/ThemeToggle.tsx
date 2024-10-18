"use client";

import { RiComputerLine, RiLoader4Line, RiMoonClearLine, RiSunFill } from "@remixicon/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="p-2 rounded-full">
        <RiComputerLine size={20} className="text-slate-800" />
      </div>
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        className="p-2 rounded-full bg-slate-100 hover:bg-amber-100 outline-none border-none"
        onClick={() => setTheme("light")}
      >
        <RiSunFill size={20} className="text-amber-500" />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 outline-none border-none"
        onClick={() => setTheme("dark")}
      >
        <RiMoonClearLine size={20} className="text-gray-800" />
      </button>
    );
  }
}
