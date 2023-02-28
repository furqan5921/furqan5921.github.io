import {
  Box,
  Container,
  Flex,
  Heading,
  Table,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import "aos/dist/aos.css";

export function About() {
  return (
    <>
      <Heading textAlign={"center"} mb={"25px"}>
        ABOUT ME
      </Heading>
      <Flex
        justifyContent={["center", "center", "space-evenly"]}
        alignItems="center"
        direction={["column", "column", "row"]}
        gap="50px"
        // border={"1px solid green"}
      >
        <Box>
          <Table
            variant="simple"
            size={"md"}
            width={["12rem", "32rem", "32rem"]}
            className="aboutTable"
            margin="auto"
            data-aos="zoom-in-right"
          >
            <Tr>
              <Th>Name</Th>
              <Td>Mohammad Furqan</Td>
            </Tr>
            <Tr>
              <Th>Higher Education</Th>
              <Td>MBA (Master of Business Administration)</Td>
            </Tr>
            <Tr>
              <Th>Address</Th>
              <Td>Bhopal, Madhya Pradesh</Td>
            </Tr>
            <Tr>
              <Th>Pincode</Th>
              <Td>462001</Td>
            </Tr>
            <Tr>
              <Th>Contact NO.</Th>
              <Td>9516222196</Td>
            </Tr>
            <Tr>
              <Th>Email ID</Th>
              <Td>furqanali5921@gmail.com</Td>
            </Tr>
          </Table>
        </Box>
        <Box>
          <Container
            textAlign={"justify"}
            maxHeight={["20rem", "20rem", "33rem"]}
            overflowY={["scroll", "scroll", "hidden"]}
            p={"0px 20px 0px 20px"}
            data-aos="zoom-in-left"
          >
            Detail-oriented Full Stack Web Developer with excellent technical
            skills, and proficiency in MERN stack. Extremely passionate about
            building appealing and dynamic products that provide great user
            experiences. Looking forward to creating a mark within a product
            based company based on the acquired skillset and passion for coding.
          </Container>
        </Box>
      </Flex>
    </>
  );
}
