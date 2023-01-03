import React, {useRef, useLayoutEffect} from 'react'
import { 
  Flex,
  Heading,
  Image,
  Text,
  Box
 } from '@chakra-ui/react'

 import { useStaticQuery, graphql } from 'gatsby'
import {gsap} from 'gsap'
import Layout from '../components/layout'
import Seo from '../components/seo'

const About = () => {

  const data = useStaticQuery(graphql`
    {
    wpPage(slug: {eq: "o-nas"}) {
      id
      content
      title
      featuredImage {
        node {
          localFile {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
  }
  `)

  const aboutRef = useRef();

  useLayoutEffect(() => {

      const ctx = gsap.context(() => {
          gsap.fromTo(aboutRef.current.children, {y:50, opacity: 0}, {scrollTrigger:{trigger: aboutRef.current.children, start: 'top 80%'}, y:0, opacity: 1, duration: 1})
      }, )

  }, [])

  return (
    <Layout>
      <Seo 
        title='O nas'
      />
      <Flex direction='column' align='center' justify='center' w='100%' >
        <Flex direction='column' align='center' justify='center' w='100%' maxW='1400px' gap='10'>
        <Heading fontFamily='head' fontSize={['3xl', '4xl', '5xl', '7xl']}>O nas</Heading>
        <Flex direction={['column','column','row']} gap='2rem' align='center' ref={aboutRef}>
        <Box>
          <Image src='https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80' w='md' boxShadow='1px 8px 29px -9px rgba(66, 68, 90, 1)' />
        </Box>
        <Text fontFamily='paragraph' maxW='500px'>
          <Text dangerouslySetInnerHTML={{ __html: data.wpPage.content}} />
        </Text>
        </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default About