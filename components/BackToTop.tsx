"use client";

import { RiArrowUpLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 600 ? setTop(false) : setTop(true);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <Link
      href="#back_to_top"
      className={`bg-gray-900 dark:bg-zinc-900/70 border border-transparent dark:border-white/10 dark:backdrop-blur-sm p-3 inline-block rounded-full text-white hover:bg-gray-700 dark:hover:bg-zinc-800 fixed right-4 md:right-8 bottom-4 md:bottom-8 ease-in-out duration-300 ${
        top && "opacity-0"
      }`}
    >
      <RiArrowUpLine size={24} />
    </Link>
  );
};

export default BackToTop;
