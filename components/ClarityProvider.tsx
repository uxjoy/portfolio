"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

export default function ClarityProvider() {
  useEffect(() => {
    Clarity.init("v058hsuwuu");
  }, []);

  return null;
}
