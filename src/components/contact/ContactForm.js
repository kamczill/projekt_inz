import React, {useState} from 'react'
import { useFormik } from 'formik';
import {database} from '../../firebase'
import {collection, addDoc} from "firebase/firestore";
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

const validate = values => {
  const errors = {};
  const errorsArr = [];
      if (!values.name) {
        errors.name = 'Wymagane imie';
      } else if (values.name.length < 3) {
        errors.name = 'Imie musi mieć co najmniej 3 litery';
      }
    
      if (!values.topic) {
        errors.topic = 'Wymagany temat';
      } else if (values.topic.length < 3) {
        errors.topic = 'Podaj temat';
      }
    
      if (!values.email) {
        errors.email = 'Wymagany email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Błędny e-mail';
      }
      
      if (!values.message) {
        errors.email = 'Wymagana wiadmość';
      }

      Object.entries(errors).map((error) => errorsArr.push(error))

  return errorsArr;
};

const ContactForm = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [topic, setTopic] = useState('');
  const [name, setName] = useState('');
  const [isSend, setIsSend] = useState(false);
  const [isAnyError, setIsAnyError] = useState(false);


  const handleSubmit = (values) => {
    try {
      console.log(values)
      if (!isSend) {
        const docRef = addDoc(collection(database, "contact"), {
          email: values.email,
          name: values.name,
          topic: values.topic,
          message: values.message
        });
      }
      setIsSend(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
      topic: ''
    },
    validate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  })

    console.log(formik.errors)

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex direction={['column', 'column', 'column', 'row']} align='center' justify='center' gap='5rem' fontFamily='paragraph' mt='6rem'>
          <Image src={bridge} width={['lg','xl','2xl']}/>
          <Stack spacing={3} w='100%' maxW='540px'>
            <Flex direction='column' gap='1.5rem'>
            <Input id='name' onChange={formik.handleChange} value={formik.values.name} placeholder='Imie*' size='md' bg='#F7F7F7' borderRight={['1', '1' ,'0']}/>
            <Input id='email' onChange={formik.handleChange} value={formik.values.email} placeholder='Email*' size='md' bg='#F7F7F7' borderRight={['1', '1' ,'0']}/>
            <Input id='topic' onChange={formik.handleChange} value={formik.values.topic} placeholder='Temat*' size='md' bg='#F7F7F7' borderRight={['1', '1' ,'0']}/>
            <Textarea id='message' onChange={formik.handleChange} value={formik.values.message} placeholder='Wiadomość*' size='md' bg='#F7F7F7' borderRight={['1', '1' ,'0']}/>
            </Flex>
            <Popover>
            <PopoverTrigger>
            <Box as='button' px='7' py='3' bg='blue' color='white' onClick={() => handleSubmit()}>Wyślij</Box>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                {
                  formik.errors.length > 0 ? 
                  (formik.errors.map(error => <Text color='red.400'>{error[1]}</Text>))
                  : ( <Text color='black'>Twoja wiadomość została wysłana. Dziękujemy!</Text>)
                } 
              </PopoverHeader>
            </PopoverContent>
          </Popover>
          </Stack>
       </Flex>
    </form>
  )
}

export default ContactForm