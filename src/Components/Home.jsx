import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";

import { FaCloudDownloadAlt } from "react-icons/fa";

import { BiShowAlt } from "react-icons/bi";

import { Link } from "react-scroll";

import { Title } from "./Title";

export function Home() {
  return (
    <>
      <Box className="home">
        <HStack
          justifyContent="space-evenly"
          width="88%"
          margin={"auto"}
          mt="50px"
        >
          <VStack alignItems={"flex-start"} >
            <Text fontSize={{ base: "md", sm: "2xl", md: "4xl" }}>
              Hi{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>{" "}
              I'm
            </Text>
            <Heading
              fontSize={{ base: "xl", sm: "3xl", md: "6xl" }}
              pt="5px"
              pb="5px"
            >
              Mohammad Furqan
            </Heading>

            <Text
              fontSize={{ base: "md", sm: "2xl", md: "4xl" }}
              paddingBottom="-30px"
              color={"orange.400"}
            >
              <Title />
            </Text>

            <Text
              align={"start"}
              fontSize={{ base: "10px", sm: "15px", md: "sm" }}
              style={{ marginTop: "0px" }}
            >
              With a solid grasp of NodeJS, ReactJS, MongoDB,Typescript and
              NextJS, I'm always excited to dive into projects that involve
              creative DOM manipulation.
            </Text>

            <HStack>
              <Link to="contact">
                <Button
                  fontSize={["12px", "12px", "18px"]}

                  color={"black"}
                  bgColor="blue.300"
                  _hover={"none"}
                >
                  Contact Me
                </Button>
              </Link>
              <Button
  
                fontSize={["12px", "12px", "18px"]}
                // color={"orange.400"}
                onClick={() => {
                  return window.open(
                    "https://drive.google.com/file/d/1msezNuGAJ1h7tM6-faNZDFuuvP6nAoVT/view?usp=sharing",
                    "_blank"
                  );
                }}
              >
                Resume &nbsp;
                <span>
                  <BiShowAlt />
                </span>
              </Button>
              <Button>
                <a
                  href={require("../files/Mohammad-Furqan-Resume.pdf")}
                  download
                >
                  <FaCloudDownloadAlt  />
                </a>
              </Button>
            </HStack>
          </VStack>

          <Box >
            <Image
              src={require("../files/profile.jpg")}
              borderRadius="200px"
              width={["150px", "150px", "250px"]}
            />
          </Box>
        </HStack>
      </Box>
    </>
  );
}
