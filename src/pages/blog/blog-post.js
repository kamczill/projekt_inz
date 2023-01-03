import React, {useRef, useLayoutEffect} from 'react'
import {gsap} from 'gsap'
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import './blog.css'
import Seo from '../../components/seo'

import { 
  Flex,
  Heading,
  Image,
  Text,
  Box,
  Avatar
 } from '@chakra-ui/react'

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  
  const aboutRef = useRef();

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {
            gsap.fromTo(aboutRef.current, {y:50, opacity: 0}, {scrollTrigger:{trigger: aboutRef.current.children, start: 'top 80%'}, y:0, opacity: 1, duration: .6})
        }, )

    }, [])

  return (
    <Layout>
      <Seo 
        title={post.title}
      />
      <Flex direction='column' align='center' justify='center' w='100%'>
        <Flex direction='column' align='center' justify='center' w='100%' maxW='1400px' gap='5'>
        <Heading fontFamily='head' fontSize={['2xl', '3xl', '4xl', '5xl']} align='center' mb='0'>{post.title}</Heading>
        <Flex direction={['column','row','row']} gap={['1rem','3rem','3rem']} align='center' justify='center' ref={aboutRef}>
          <Text fontFamily='paragraph' fontSize={['lg','xl','xl']} color='gray.500' ref={aboutRef}>Dodany: {post.date}</Text>
          <Flex direction='row' gap='1rem' align='center' justify='center'>
            <Avatar size='sm' src={post.author.node.avatar.url} ref={aboutRef}/>
            <Text fontFamily='paragraph' fontSize={['lg', 'xl']} ref={aboutRef}>{post.author.node.name}</Text>
          </Flex>
        </Flex>
        <Box>
          <Image src={''}  />
        </Box>
        {/* <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} /> */}
        <Text className="content" fontFamily='paragraph' color='gray.700' dangerouslySetInnerHTML={{ __html: post.content}} p='.5rem' maxW={['xs', 'xl', '8xl']} ref={aboutRef}/>
        </Flex>
    </Flex>

      {/* <div>
        <h1></h1>
        <h1>{post.date}</h1>
        {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
      {/* </div> */} 
    </Layout>
  )
}
export const query = graphql`
  query ($slug: String) {
    allWpPost(filter: {slug: {eq: $slug}}) {
      nodes {
        title
        date(formatString: "DD.MM.YYYY")
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        content
        slug
        excerpt
      }
    }
  }
`