import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";

export default function Card() {
  return (
    <div
      className={cn(
        "w-72 min-h-[26rem] h-[26rem] rounded-xl",
        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
        "p-4 flex flex-col text-black justify-between",
      )}
    >
      <div>
        <h2 className="font-bold text-[15px] text-center">
          Kaizen UI Component
        </h2>

        <p className="text-neutral-600 mt-2 text-[10px] text-center">
          A collection of beautiful UI Components, lets get on with it
        </p>

        <div className="flex items-center justify-center">
          <button
            className={cn(
              "flex items-center gap-1  text-[10px] px-2 py-1 ",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1 mt-4",
            )}
          >
            <Image
              src="/kaizen.png"
              alt="Kaizen Logo"
              width={50}
              height={50}
              className={cn("h-4 w-4")}
            />
            Kaizen <IconX className="h-3 w-3 text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
