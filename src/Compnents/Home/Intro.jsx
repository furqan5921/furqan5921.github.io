import React from 'react'
import styles from "../..//CSS/Home.css"
import { Box, Img, Text } from '@chakra-ui/react'
import ParticlesComponent from './Part'
const Intro = () => {
  return (
    <Box >
    <Box  display={"flex"} flexDirection={'column'} alignItems={'center'} margin={"auto"}  className='css-typing' justifyContent={"center"} color={"white"} h={"80vh"} textAlign={'center'}>
     <Text fontSize={{base:"px",sm:"30px", lg:"30px",xl:"36px"}}>Hey Folks!</Text>
     <Text fontSize={{base:"px",sm:"30px", lg:"30px",xl:"36px"}}>I am Mohammad Furqan.</Text>
     <Text fontSize={{base:"px",sm:"30px", lg:"30px",xl:"36px"}}>Full Stack Web Developer.</Text>
     <Img h={"200px"} w={"200px"} borderRadius={"50%"} src='https://scontent.fbho4-1.fna.fbcdn.net/v/t39.30808-6/287688910_5454611447929594_1064865802921130711_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=q8IUPkcXjqIAX_TOoUz&_nc_ht=scontent.fbho4-1.fna&oh=00_AT9TWZh7f2N6Eqf2TATzT1vodgD2a-e6jbFxIuPBXtYJeA&oe=6351C008' alt='Profile Picture'></Img>
    <ParticlesComponent />
    </Box>
  </Box>
  )
}

export default Intro
