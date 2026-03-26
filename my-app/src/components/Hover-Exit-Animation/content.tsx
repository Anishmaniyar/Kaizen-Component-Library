import { cn } from "@/lib/utils";
import React from "react";
import Card from "../Hover-Exit-Animation/card";
import { GeistSans } from "geist/font/sans";

export const Content = () => {
  return (
    <div
      className={cn(
        GeistSans.className,
        "h-screen flex items-center justify-center bg-gray-50",
      )}
    >
      <Card />
    </div>
  );
};
