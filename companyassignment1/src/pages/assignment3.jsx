import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
export default function DatePage() {
  const [firstValue, setFirstValue] = useState(new Date());
  const [secondValue, setSecondValue] = useState(new Date());

  const calculateTimeDifference = () => {
    const timeDifference = Math.abs(secondValue.getTime() - firstValue.getTime());

    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    let days = Math.floor(hours / 24);
    hours = hours % 24;
    return { hours, minutes, seconds, days };
  };

  let { hours, minutes, seconds, days } = calculateTimeDifference();
  let approx = 0;
  if (hours >= 23) {
    approx = days + 1;
  }else{
    approx=days
  }
  return (
    <VStack style={{border:"2px solid red" ,height:"500px",display:"flex" ,justifyContent:"center",alignItems:"center"}}>
      <Text>From</Text>
      <DateTimePicker size={50} onChange={setFirstValue} value={firstValue} />
      <Text>To</Text>
    
      <DateTimePicker onChange={setSecondValue} value={secondValue} />
     <Box>
     <HStack>
        <p>
          Time Difference:<Heading color={"red"}>{days} days</Heading> <Heading color={"green"}>{hours} hours</Heading>  <Heading color={"blue"}>{minutes} minutes,</Heading>   <Heading color={"teal"}>{seconds} seconds</Heading>
       
        </p>
      </HStack>
     </Box>
      <Heading> Approx {approx} days</Heading>
    </VStack>
  );
}
