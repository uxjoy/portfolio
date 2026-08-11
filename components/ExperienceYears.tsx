"use client";

import { useEffect, useState } from "react";
import { getExperienceYears } from "@/utils/data/aboutTextsData";

// Renders the years of experience, computed live from the current date in the
// browser. Kept client-side so the value never freezes at build time. Pair the
// consuming <span> with `suppressHydrationWarning` since the text is time-based.
const ExperienceYears = () => {
  const [years, setYears] = useState<number>(getExperienceYears());

  useEffect(() => {
    setYears(getExperienceYears());
  }, []);

  return <>{years}</>;
};

export default ExperienceYears;
