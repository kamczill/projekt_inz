import React, {useRef, useLayoutEffect} from 'react'
import { Container, Box, Flex, Image, VStack, Text, Heading } from '@chakra-ui/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import teamImg from '../../images/team.png'

const Header = () => {
  const headerRef = useRef();
  const tl = useRef();
  

  useLayoutEffect(() => {
      
      let mm = gsap.matchMedia();

      console.log(headerRef.current.children)

      let ctx = gsap.context(() => {
          gsap.registerPlugin(ScrollTrigger)
          gsap.fromTo(headerRef.current.children[0], {x: '400px'}, {x: '-=400px', duration: 1.1})

          // mm.add('(max-width: 766px)', () => {
          //     gsap.fromTo(headerRef.current.children[1], {y: '+=400px', opacity: 0}, { scrollTrigger: { trigger: headerRef.current.children[0], start: 'top top'}, y: '0', opacity: 1, duration: .8, stagger: 1})
          // })
          
          mm.add('(min-width: 767px)', () => {
              gsap.fromTo(headerRef.current.children[1], {y: '+=400px', opacity: 0}, { y: '0', opacity: 1, duration: .8})
          })
      } , headerRef) 

      return () => ctx.revert()

  }, [])  

  return (
    <Flex direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']} align='space-between' justify='space-around' pt={['5', '5', '10']} ref={headerRef}>
      <VStack justify={['center', 'flex-start']} align={['center', 'center', 'center', 'flex-start']} mt='5' >
        <Box bg='pink' px='2' py='1.5' alignItem='flex-start' display={['none', 'none', 'none', 'block']}>
          <Text color='white'>PROJEKT INŻYNIERSKI</Text>
        </Box>
        <Container p='0' maxW='510px'>
        <Heading fontSize={['3xl', '6xl']}>Strona w pełni oddana dobrym praktykom SEO</Heading>
        </Container>
        <Container p='0' maxW='500px' >
          <Text fontSize='xl' fontFamily='paragraph' color='gray.600' >
          Tworzenie stron internetowych i SEO (ang. Search Engine Optimization) to dwa różne aspekty prowadzenia biznesu w sieci. Tworzenie stron internetowych polega na projektowaniu i budowaniu witryn internetowych za pomocą języków programowania, takich jak HTML, CSS i JavaScript. 
          </Text>
        </Container>
      </VStack>
      <Flex align={['center', 'center', 'center', 'flex-start']} justify={['center', 'center', 'center', 'flex-start']} mt='5'>
      <Box w={['md', 'md', 'xl', 'xl', '3xl']}>
        <Image src='https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80'
          css='box-shadow: -27px -27px 0px 0px rgba(0,230,202,1);
          // -webkit-box-shadow: -27px -27px 0px 0px rgba(0,230,202,1);
          // -moz-box-shadow: -27px -27px 0px 0px rgba(0,230,202,1);'
        ></Image>
      </Box>
      </Flex>
    </Flex>
  )
}

export default Header