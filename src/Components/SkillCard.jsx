import { Box, SimpleGrid, Text, useColorMode, VStack } from "@chakra-ui/react";
import React from "react";
import {
  SiChakraui,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const skills = [
  { icon: TbBrandNextjs, color: "#430098", name: "NextJS" },
  { icon: SiPrisma, color: "#37bcf8", name: "Prisma" },
  { icon: SiHtml5, color: "#E44D26", name: "HTML" },
  { icon: SiCss3, color: "#264DE4", name: "CSS" },
  { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { icon: SiReact, color: "#53C1DE", name: "React" },
  { icon: SiRedux, color: "#764ABC", name: "Redux" },
  { icon: SiExpress, color: "#732FF9", name: "Express JS" },
  { icon: SiMongodb, color: "black", name: "MongoDB" },
  { icon: SiNodedotjs, color: "#99424F", name: "Node JS" },
  { icon: SiTypescript, color: "#3077c6", name: "TypeScript" },
  { icon: SiPostman, color: "#DE4C36", name: "Postman" },
  { icon: SiChakraui, color: "#59C9C8", name: "Chakra UI" },
  { icon: SiTailwindcss, color: "#37bcf8", name: "Tailwind CSS" },
];

const SkillCard = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#222e3d" : "white";
  const bc =
    colorMode === "dark"
      ? "2px solid rgb(150, 150, 226)"
      : "2px solid lightgray";

  return (
    <Box>
      <SimpleGrid
        columns={[2, 3, 5]}
        m="auto"
        justifyContent={"center"}
        textAlign="center"
        w="80%"
        color="#00B9E8"
        gap={"50px"}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            _hover={{ color: skill.color }}
            boxShadow="base"
            p="6"
            rounded="md"
            bg={bgColor}
            border={bc}
            className="dev"
            data-aos="zoom-in-up"
          >
            <VStack alignItems={"center"}>
              <skill.icon className="dev" fontSize="4rem" />
              <Text mt="15px">{skill.name}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillCard;
