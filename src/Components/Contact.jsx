import {
  Box, Button, Flex, FormLabel, HStack, Input, Link, Text,
  Textarea, useColorMode, VStack
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {
  AiFillGithub, AiFillLinkedin
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export function Contact() {
  const { colorMode } = useColorMode();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_xlweux7",
        "template_1b13euq",
        form.current,
        "BQjt4DP3z8PNCZFzZ"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Box pb={"30px"}>
        <Flex
          direction={["column", "column", "row"]}
          margin="auto"
          justifyContent="space-evenly"
          pr="50px"
          pl="50px"
          mt={"50px"}
        >
          <VStack mt="50px" data-aos="fade-right">
            <Box>
              <Text fontSize={"2xl"}>Chat With Me</Text>
            </Box>
            <form ref={form} onSubmit={sendEmail}>
              <Box>
                <FormLabel fontSize={"12px"}>Your Name</FormLabel>
                <Input type="text" width="20rem" name="from_name" />
              </Box>
              <Box>
                <FormLabel fontSize={"12px"}>Email</FormLabel>
                <Input type="text" width="20rem" name="from_email" />
              </Box>
              <Box>
                <FormLabel fontSize={"12px"}>Subject</FormLabel>
                <Input type="text" width="20rem" name="from_subject" />
              </Box>
              <Box>
                <FormLabel fontSize={"12px"}>Message</FormLabel>
                <Textarea
                  size={"sm"}
                  width="20rem"
                  placeholder="Message"
                  name="from_message"
                />
              </Box>
              <Box>
                <Button mt={"20px"} bgColor={"green"} type="submit">
                  Send Message
                </Button>
              </Box>
            </form>
          </VStack>

          <VStack
            alignItems={"flex-start"}
            gap="20px"
            marginTop={"60px"}
            data-aos="fade-left"
          >
            <Box>
              <Text fontSize={"2xl"}>Contact Me</Text>
            </Box>
            <HStack gap={"10px"}>
              <HiLocationMarker />
              <Text textAlign={"left"}>
                Bhopal, Madhya Pradesh
                
              </Text>
            </HStack>
            <HStack gap={"10px"}>
              <BsFillTelephoneFill />
              <Text>+91 9516222196</Text>
            </HStack>
            <HStack gap={"10px"}>
              <MdEmail />
              <Text>furqan5921@gmail.com</Text>
            </HStack>
            <HStack>
              <Box _hover={{ color: "#0A66C2", cursor: "pointer" }}>
                <Link
                  href="https://www.linkedin.com/in/furqan5921/"
                  target={"_blank"}
                >
                  <AiFillLinkedin size="25px" />
                </Link>
              </Box>
              <Box _hover={{ color: "#6e5494", cursor: "pointer" }}>
                <Link href="https://github.com/furqan5921" target={"_blank"}>
                  <AiFillGithub size="25px" />
                </Link>
              </Box>
            
            </HStack>
          </VStack>
        </Flex>

        <Box>
          {colorMode === "dark" ? (
            <hr
              style={{
                width: "90vw",
                margin: "auto",
                marginBottom: "30px",
                marginTop: "40px",
              }}
            />
          ) : (
            <hr
              style={{
                borderColor: "RGBA(0, 0, 0, 0.15)",
                width: "90vw",
                margin: "auto",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            />
          )}
        </Box>
        <Box data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
          <Text>
            Copyright ©2023 All rights reserved | This template is made By {" "}
            <Link href="https://github.com/furqan5921" target={"_blank"}>
              Mohammad Furqan
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}
