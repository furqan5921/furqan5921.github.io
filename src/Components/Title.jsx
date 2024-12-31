import React from "react";
import Typewriter from "typewriter-effect";

export function Title() {
  return (
    <Typewriter
      options={{
        strings: [
          "Experienced Next.js 14 + Prisma ORM developer",
          "Versatile MERN Stack Developer",
          "Creative Problem Solver in Software Development",
          "Full Stack Developer proficient frontend and backend",
        ],

        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay: 20, // Add a delay of 2000 milliseconds between each string
      }}
    />
  );
}
