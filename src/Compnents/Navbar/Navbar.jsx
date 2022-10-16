import { Box } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
   <Box className={"intro"}  bgColor={ "blackAlpha"} fontSize={{base:"8px",sm:"12px",md:"15px",lg:"18px",xl:"24px"}} px={{base:"10",sm:"10px" ,md:"30px" ,lg:"40px", xl:"50px"}} display={{sm:"flex",md:"flex",lg:"flex",xl:"flex"}} zIndex={999} justifyContent={{base:"center",sm:"space-evenly",md:"space-evenly",lg:"space-evenly" ,xl:"space-evenly"}} fontWeight={600} p={"10px"} color={"white"} fontFamily={"Work Sans"} position="sticky" top={"0px"}>
    <Box px={{base:"10",sm:"20px" ,md:"30px" ,lg:"40px", xl:"30px"}}   bgColor={ "blackAlpha"} py={"0px"} border={"1px solid teal"} >Home</Box>
    <Box px={{base:"10",sm:"20px" ,md:"30px" ,lg:"40px", xl:"30px"}}   bgColor={ "blackAlpha"} py={"0px"} border={"1px solid teal"} >About</Box>
    <Box px={{base:"10",sm:"20px" ,md:"30px" ,lg:"40px", xl:"30px"}}   bgColor={ "blackAlpha"} py={"0px"} border={"1px solid teal"} >Skills</Box>
    <Box px={{base:"10",sm:"20px" ,md:"30px" ,lg:"40px", xl:"30px"}}   bgColor={ "blackAlpha"} py={"0px"} border={"1px solid teal"} >Projects</Box>
    <Box px={{base:"10",sm:"20px" ,md:"30px" ,lg:"40px", xl:"30px"}}   bgColor={ "blackAlpha"} py={"0px"} border={"1px solid teal"} >Contact</Box>
   </Box>
  )
}

export default Navbar
// xs: "100px", sm: "100px",md: "100px",lg: "100px,xl: "100px","2xl": "100px"
// w={{xs: "100px", sm: "100px",md: "100px",lg: "100px', xl: "100px","2xl": "100px"}}
// w={{xs: "100px", sm: "100px",md: "100px",lg: "100px', xl: "100px","2xl": "100px"}}
// w={{xs: "100px", sm: "100px",md: "100px",lg: "100px', xl: "100px","2xl": "100px"}}
// w={{xs: "100px", sm: "100px",md: "100px",lg: "100px', xl: "100px","2xl": "100px"}}
// w={{xs: "100px", sm: "100px",md: "100px",lg: "100px', xl: "100px","2xl": "100px"}}

// xs: "0.75rem", sm: "0.875rem", md: "1rem", lg: "1.125rem", xl: "1.25rem","2xl": "1.5rem",
// width={base:"90px", sm: "90px", md: "90px", lg: "90px", xl:'90px','2xl': '90px'}} 