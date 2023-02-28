

import React from "react";
import Typewriter from "typewriter-effect";

export function Text() {


 return (

   <Typewriter
      options={{
         strings: [
           "MERN Stack Developer",
           "Problem Solver",
         "Full Stack Developer"
      ],

        autoStart: true,

        loop: true,
        
        deleteSpeed: 50,
     }}

     />
   );

   
}