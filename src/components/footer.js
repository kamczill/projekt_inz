import React from 'react'

import {
    Heading,
    Text,
    Box,
    Flex,
    Link
} from '@chakra-ui/react'

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <Flex direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']} justify={['space-between']} align={['center', 'center', 'center', 'flex-start']}  gap='5rem' mt='100px' pt='30px'  borderTop='1px solid #161B3D'>
        <Flex direction='column' align='center' maxWidth='370px' gap='5' mb='10'>
            <Heading fontFamily='logo'>PROJEKT JKS</Heading>
            <Text fontFamily='paragraph' color='gray.600' align='center'>
            Tworzenie stron internetowych i SEO są ważnymi elementami prowadzenia biznesu w sieci, ale są one różne i niezależne od siebie. Warto rozważyć użycie obu tych narzędzi, aby zapewnić skuteczne i atrakcyjne prowadzenie biznesu w internecie.
            </Text>
            <Flex gap='5'>
                <FaFacebookF fontSize='25' />
                <FaTwitter fontSize='25' />
                <FaInstagram fontSize='25' />
            </Flex>
            <Text mt='19'>
                Blog o SEO © 2022 All Right Reserved
            </Text>
        </Flex>
        <Flex direction={['column', 'row']} gap='20' justify={['center']} align={['center', 'center', 'flex-start', 'flex-start', 'flex-start']}>
            <Flex direction='column' align='center' gap='1'>
                <Heading mb='4'>Twórcy</Heading>
                <Link>Kamil Chrobak</Link>
                <Link>Julian Cichor</Link>
                <Link>Szymon Zając</Link>
            </Flex>
            <Flex direction='column' align='center' gap='1' >
                <Heading mb='4'>Źródła</Heading>
                <Link href='https://projektjks.pl/'>projektjks.pl</Link>
                <Link href='https://unsplash.com/'>Unsplash</Link>
                <Link href='https://delante.pl/seo-zalety/'>Delante</Link>
            </Flex>
            <Flex direction='column' align='center' gap='1'>
                <Heading mb='4'>Kontakt</Heading>
                <Link href='/contact'>Skontaktuj się z nami!</Link>                
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Footer