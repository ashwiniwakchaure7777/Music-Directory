'use client'
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-full md:h-[40rem] lg:h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative mt-20 text-center w-full z-10">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          obcaecati magni deleniti, cumque nam facilis repellat mollitia totam.
          Consectetur, aliquam. Temporibus enim non illo alias ea maxime est,
          repellendus ut.
        </p>
        <div className="mt-6">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Link href={"/courses"}>Explore more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
