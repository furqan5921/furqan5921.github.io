import { Box } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
   <Box bgColor={ "blackAlpha"} display={"flex"} zIndex={999} justifyContent={"space-evenly"} fontWeight={600} border={"1px solid red"} color={"white"} fontFamily={"Work Sans"} position="sticky" top={"0px"}>
    <Box px={"40px"} bgColor={ "blackAlpha"} py={"10px"} border={"1px solid teal"} >Home</Box>
    <Box px={"40px"} bgColor={ "blackAlpha"} py={"10px"} border={"1px solid teal"} >About</Box>
    <Box px={"40px"} bgColor={ "blackAlpha"} py={"10px"} border={"1px solid teal"} >Projects</Box>
    <Box px={"40px"} bgColor={ "blackAlpha"} py={"10px"} border={"1px solid teal"} >Contact</Box>
   </Box>
  )
}

export default Navbar
