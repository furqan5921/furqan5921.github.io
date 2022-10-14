import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ParticlesComponent from './Part'
import styles from "../..//CSS/Home.css"





const Home = () => {
  return (
       <Box>      
        <Box >
          <Box display={"flex"} flexDirection={'column'} alignItems={'center'} margin={"auto"} border={'1px solid white'} className='css-typing' justifyContent={"center"} color={"white"} h={"80vh"} textAlign={'center'}>
           <Text>Hey Folks!</Text>
           <Text>I am Mohammad Furqan</Text>
           <Text>Full Stack Web Developer</Text>
          <ParticlesComponent />
          </Box>
        </Box>
      </Box>   
  )
}

export default Home
