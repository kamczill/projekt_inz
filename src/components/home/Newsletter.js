import React, {useState, useRef, useLayoutEffect} from 'react'
import {database} from '../../firebase'
import {collection, addDoc} from "firebase/firestore";
import { Box, VStack, Text, Heading, Input, Flex, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react'
import { useFormik } from 'formik';
import {gsap} from 'gsap'

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Puste pole';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Niepoprawnie wprowadzony adres e-mail';
  }

  return errors;
};

const Form = () => {

  const [email, setEmail] = useState('');
  const [isSend, setIsSend] = useState(false);

  const handleSubmit = (values) => {
    try {
      console.log(values)
      if (!isSend) {
        const docRef = addDoc(collection(database, "newsletter"), {
          email: values.email
        });
      }
      setIsSend(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex fontFamily='paragraph' direction={['column', 'column', 'row']} gap={['2', '2', '0']}>
            <Input id='email' onChange={formik.handleChange} value={formik.values.email} placeholder='Twój adres email*' borderRight={['1', '1' ,'0']} borderRightRadius={['5', '5', '0']}/>
            <Popover>
            <PopoverTrigger>
            <Box as='button' px='7' py='2' bg='ocean' onClick={() => handleSubmit()}>Subskrybuj</Box>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>{formik.errors.email ? <Text color='black'>{formik.errors.email}</Text> : <Text color='black'>Twój mail {email} został poprawnie dodany do newslettera. Dziękujemy!</Text>}</PopoverHeader>
            </PopoverContent>
          </Popover>
        </Flex>
    </form>
  )
}


const Newsletter = () => {

  const aboutRef = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(aboutRef.current.children, {y:50, opacity: 0}, {scrollTrigger:{trigger: aboutRef.current.children, start: 'top 80%'}, y:0, opacity: 1, duration: .5})
        }, )

    }, [])

  return (
    <VStack w='100%' py='40' px='3' bg='blue' color='white' spacing='5' mt='100px' ref={aboutRef}>
        <Heading fontFamily='head'>Newsletter</Heading>
        <Text fontFamily='paragraph' textAlign='center'>
           Zasubskrybuj nas, aby otrzymywać e-maile o każdym nowym poście. Rozwijaj swoją wiedze o SEO razem z nami!
        </Text>
        <Form />
    </VStack>
  )
}

export default Newsletter