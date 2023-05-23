import React from "react";
import "../Styles/Login.css";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
const Login = () => {
  return (
    <Box
      backgroundImage="url('https://media.istockphoto.com/id/1045035862/photo/canopy-of-jungle.jpg?s=612x612&w=0&k=20&c=zZOhcB3LZYJMKPtXaXWRIeMOIV144JO6yc2VMekP-bI=')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="200px"
    >
      <Flex justifyContent="center" alignItems="center">
        <Box 
        width={"100%"}
          maxW="576px"
          maxH={"687px"}
          background="white"
          borderRadius="10px"
          boxShadow="md"
          marginTop="100px"
        >
          <Box
            boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
            
            h={"56px"}
            className="Center"
          >
            <Image
              w={"82px"}
              h={"24px"}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
              alt="AmazonLogo"
            />
          </Box>
          <Box
          
            maxW={"577px"}
            h={"684px"}
            w={"90%"}
            m={"auto"}
         
            padding={"0px 10%"}
          >
            <form style={{marginBottom:"20px"}} action="">
              <Center>
                <Text fontSize={"3xl"} color={"#60cb59"} fontWeight={"bold"}>
                  Login
                </Text>
              </Center>
              <Box>
                <Image
                  w={"100%"}
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSe5Kl9bfl5O2Nu3jvTWsYzlA9NFOoiQID_xiPux1c2C-YEnZBT"
                  alt="imageOfTree"
                />
              </Box>
              <br />
              <Input
                type="email"
                className="inputelements"
                bg={"none"}
                name="name"
                id="usrname"
                border={"none"}
                borderRadius={"none"}
                borderBottom={"2px solid grey"}
                minLength="3"
                maxLength="30"
                mt={5}
                autoComplete="off"
                placeholder="Name"
                _placeholder={{
                  color:"#60cb59"  ,
                  fontSize:"25px" 
                }}
                required
              />
              <Input
                type="password"
                className="inputelements"
                name="name"
                id="usrname"
                mt={5}
                border={"none"}
                borderRadius={"none"}
                borderBottom={"2px solid grey"}
                minLength="3"
                maxLength="30"
                autoComplete="off"
                placeholder=" Password"
                _placeholder={{
                  color:"#60cb59"  ,
                  fontSize:"25px" 
                  
                }}
                required
              />
              <br />
              <br />
              <Button
                type="submit"
                colorScheme=""
                bg={"#60cb59"}
                size="md"
                h={"50px"}
                w={"100%"}
                m={"auto"}
                borderRadius={30}
              >
              Sign In
              </Button>
            </form>

            <Box className="sepratethemfull" mb={"25px"}>
              <Box fontWeight={"bold"}>Forgot Password</Box>
              <Text fontWeight={"bold"} color={"red"}>New User? Sign Up</Text>
            </Box>
            
            <Center fontWeight={"bold"} mb={"25px"}>or</Center>
          
            <Button bg={"#4285f4"} color={"white"} w={"100%"} className="alignThemInCenter">
              <Image
               bg={"white"}
               p={1}
               mr={15}
                h={"30px"}
                w={"30px"}
                src="https://pbs.twimg.com/card_img/1656560674347053056/fnoKTsp6?format=png&name=small"
                alt=""
              />
              <Text>CONTINUE WITH GOOGLE</Text>
            </Button>
            <br />
            <br />
            <Button p={1} bg={"#4285f4"} color={"white"} w={"100%"} className="alignThemInCenter">
              <Image
              bg={"white"}
              p={1}
               mr={15}
                h={"30px"}
                w={"30px"}
                src="https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png"
                alt=""
              />
              <Text>CONTINUE WITH FACEBOOK</Text>
            </Button>
            <Box></Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
