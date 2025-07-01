"use client";
import { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 1), 20);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="mb-4 text-2xl">
        Loading... <span className="text-primary-default">{progress}%</span>
      </div>
      <div className="w-64 h-1 bg-whiteAlpha-8 rounded">
        <div
          className="h-full bg-primary-400 rounded-full"
          style={{ width: `${progress}%`, transition: "width 0.2s" }}
        />
      </div>
    </div>
  );
};

export default Loading;
