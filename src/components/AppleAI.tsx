import React from "react";
import Link from "next/link";
import { Vortex } from "@/components/UI/vortex";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Apple Intelligence
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            <Link href={""}>
                    Preview
                </Link>
            </button>
        </div>
      </Vortex>
    </div>
  );
}
