import React, {useState} from 'react'
import { useFormik } from 'formik';
import {database} from '../../firebase'
import {ref,push,child,update} from "firebase/database";
import {
    Flex,
    Image,
    Text,
    Box,
    Stack,
    Input,
    Textarea,
    Button,
    Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody
} from '@chakra-ui/react'

import bridge from '../../images/team.png'
import { filterProps } from 'framer-motion';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Wymagane imie';
  } else if (values.name.length > 3) {
    errors.name = 'Imie ma co najmniej 3 litery';
  }

  if (!values.topic) {
    errors.topic = 'Wymagany temat';
  } else if (values.topic.length > 3) {
    errors.topic = 'Podaj temat';
  }

  if (!values.email) {
    errors.email = 'Wymagany email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Błędny e-mail';
  }
  
  if (!values.message) {
    errors.email = 'Wymagana wiadmość';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Błędny e-mail';
  }

  return errors;
};

const ContactForm = () => {

  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [topic, setTopic] = useState(null);
  const [message, setMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      topic: '',
      message: '',
    },
    validate,
    onSubmit: values => {
      handleSubmit();
    },
  });


  const handleSubmit = () => {
    let obj = {
      email: email,
      name: name,
      topic: topic,
      message: message
    }
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj;
    return update(ref(database), updates);
  }

  return (
    <Flex direction={['column', 'column', 'column', 'row']} align='center' justify='center' gap='5rem' fontFamily='paragraph' mt='6rem'>
        <Image src={bridge}/>
        <Stack spacing={3} w='100%' maxW='540px'>
          <form>
            <Input id='name' onChange={formik.handleChange} value={formik.values.name} placeholder='Imie*' size='md' bg='#F7F7F7'/>
            <Input id='email' onChange={formik.handleChange} value={formik.values.email} placeholder='Email*' size='md' bg='#F7F7F7'/>
            <Input id='topic' onChange={formik.handleChange} value={formik.values.topic} placeholder='Temat*' size='md' bg='#F7F7F7'/>
            <Textarea id='message' onChange={formik.handleChange} value={formik.values.message} placeholder='Komentarz lub wiadomość*' h='10rem' size='md' bg='#F7F7F7'/>
            <Popover>
            <PopoverTrigger>
            <Button onClick={() => handleSubmit()} >Wyślij</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                  {
                  formik.errors? 
                  Object.entries(formik.errors).map(error => <Text color='red.400'>{error[1]}</Text>) 
                  : <Text color='black'>Twoja wiadomość została wysłana. Dziękujemy!</Text>
                  }                  
                  </PopoverHeader>
            </PopoverContent>
            </Popover>
          </form>
        </Stack>
    </Flex>
  )
}

export default ContactForm