import { Box, Button, Center, Heading } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <>
      <Center>
    <Heading>Thanks for giving me the Oppurtunity</Heading>
    </Center>
     <Box width={500} height={300} display={"flex"} gap={50} justifyContent={"center"} alignItems={"center"} m={"auto"}>
  <a href="/first"><Button>Assignment 1</Button></a>
  <a href="/second"><Button>Assignment 2</Button></a>
  <a href="/third"><Button>Assignment 3</Button></a>
     </Box>
    </>
  )
}

export default Home
