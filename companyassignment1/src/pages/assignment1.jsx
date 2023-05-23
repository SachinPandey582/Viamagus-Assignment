import React from 'react'
import "../Styles/Login.css"
import { Box, Button, Center, Flex, Image, Input, Text } from '@chakra-ui/react'
const Login = () => {
  return (
    <Box
    backgroundImage="url('https://media.istockphoto.com/id/1045035862/photo/canopy-of-jungle.jpg?s=612x612&w=0&k=20&c=zZOhcB3LZYJMKPtXaXWRIeMOIV144JO6yc2VMekP-bI=')"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    height="200px"
  >
    <Flex
      
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="400px"
        h={500}
        
        background="white"
        borderRadius="4px"
        boxShadow="md"
        marginTop="100px"
      >
        <Box boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} h={"60px"} className='Center'>

  <Image  w={100} h={8} 
  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' alt='AmazonLogo'/>

        </Box>
       <Box  w={"70%"} m={"auto"}>
       <form action="">
        <Center >
          <Text>Login</Text>
        </Center>
        <Box>
          <Image w={"100%"} src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSe5Kl9bfl5O2Nu3jvTWsYzlA9NFOoiQID_xiPux1c2C-YEnZBT' alt='imageOfTree'/>
        </Box>

        <Input
          type="email"
          className='inputelements'
          name="name"
          id="usrname"
          border={"none"}
          borderRadius={"none"}
          borderBottom={"2px solid red"}
          minLength="3"
          maxLength="30"
          autoComplete="off"
          placeholder="Enter your Full Name"
          _placeholder={{
            color: 'green', // Customize the color here
          }}
          required
        />
        <Input
          type="password"
          className='inputelements'
          name="name"
          id="usrname"
          border={"none"}
          borderRadius={"none"}
          borderBottom={"2px solid red"}
          minLength="3"
          maxLength="30"
          autoComplete="off"
          placeholder="Enter your Full Name"
          _placeholder={{
            color: 'green', // Customize the color here
          }}
          required
        />
          <Button type='submit' colorScheme='teal' size='md' w={"100%"} m={"auto"}>
    Button
  </Button>
        </form>

        <Box className='sepratethemfull'>
          <Box>Forgot Password</Box>
          <Box>New User? Sign Up</Box>
        </Box>
        <Center>or</Center>
        <Button w={"100%"} className='alignThemInCenter'>
          <Image h={"20px"} w={"20px"} src="https://pbs.twimg.com/card_img/1656560674347053056/fnoKTsp6?format=png&name=small" alt="" />
          <Box>CONTINUE WITH GOOGLE</Box>
         
        </Button>
        <Button  w={"100%"} className='alignThemInCenter'>
          <Image h={"25px"} w={"25px"} src="https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png" alt="" />
          <Box>CONTINUE WITH FACEBOOK</Box>
         
        </Button>
        <Box></Box>
       </Box>
      </Box>
    </Flex>
  </Box>
  )
}

export default Login
