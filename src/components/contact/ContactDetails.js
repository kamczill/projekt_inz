import React, {useRef, useLayoutEffect} from 'react'
import { gsap } from 'gsap'
import {
    Flex,
    Heading,
    Box,
    Circle,
    VStack,
    Text
} from '@chakra-ui/react'
import { RiMapPin2Line, RiMailLine, RiPhoneLine } from 'react-icons/ri'

const icons = {
    map: <RiMapPin2Line/>,
    mail: <RiMailLine/>,
    phone: <RiPhoneLine/>
}

const Feature = ({ icon, title, desc}) => {

    return(
        <VStack spacing={3} align='center' justify='center'>
            <Circle size='90' bg='blue' color='white'>
                <Text fontSize='5xl'>{icon}</Text>
            </Circle>
            <Heading align='center'>
                {title}
            </Heading>
            <Text fontFamily='paragraph' color='gray.600' textAlign='center' maxW='380px'>
                {desc}
            </Text>
        </VStack>
    )
}


const ContactDetails = () => {

const aboutRef = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(aboutRef.current.children, {y:50, opacity: 0}, {scrollTrigger:{trigger: aboutRef.current.children, start: 'top 80%'}, y:0, opacity: 1, duration: .5})
        }, )

    }, [])

  return (
    <Flex direction='column' align='center' justify='center' mt='5rem' gap='3rem' ref={aboutRef}>
        <Heading align='center'>Szczegółowe dane kontaktowe</Heading>
        <Flex direction={['column', 'row']} gap='20' align='center'>
            <Feature 
                icon={icons.map}
                title='Adres'
                desc={'ul. Podchorążych 2 30-084 Kraków'}
            />
            <Feature 
                icon={icons.mail}
                title='E-mail'
                desc='kontakt@projektjks.pl'
            />
            <Feature 
                icon={icons.phone}
                title='Numer kontaktowy'
                desc='+48 882 231 543'
            />
        </Flex>
    </Flex>
  )
}

export default ContactDetails