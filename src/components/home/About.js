import React, {useLayoutEffect, useRef} from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import {gsap} from 'gsap'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useParallax } from 'react-scroll-parallax'
import photo from '../../images/team.png'


import {
    Image,
    Box,
    Flex,
    Text,
    Heading,
    VStack

} from '@chakra-ui/react'

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
    const { ref } = useParallax({
        speed: -8,
    })

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {
            gsap.fromTo(aboutRef.current.children, {y:50, opacity: 0}, {scrollTrigger:{trigger: aboutRef.current.children, start: 'top 80%'}, y:0, opacity: 1, duration: .5})
        }, )

    }, [])

    // console.log(data.wpPage.featuredImage.node.localFile.childImageSharp.original.src)

  return (
    <Flex align='center' justify='center' mt='100' mr={['0', '0', '400']} >
        <Box display={['none', 'none', 'block']} ref={ref}> 
            <Image src='https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80' w='lg' h='xl' objectFit='cover' boxShadow='1px 8px 29px -9px rgba(66, 68, 90, 1)'/>
            <GatsbyImage image='../images/team.png' />
        </Box>
        <Box pos='relative' ref={aboutRef}>
                <Box pos={['block', 'block','absolute']} top='-120' left='-20' w={['100%', '100%', '400px', '500px', '600px', '760px']} >
                <VStack align='flex-start' spacing='5'p='8' bg='#F7F7F7'>
                    <Text fontFamily='paragraph'>O nas</Text>
                    <Heading fontFamily='head' fontSize={['3xl', '5xl']}>Nasz zespół</Heading>
                    <Text fontFamily='paragraph' fontSize='md' color='gray.600'>
                    Nasza historia rozpoczęła się wraz z decyzją złożenia deklaracji na nasze studia. Od przejścia przez mury uczelni wiedzieliśmy, że chcemy w przyszłości być KIMŚ. Nasze starania i wrodzona nieustępliwość pozwoliły nam dotrwać do tego momentu.
                    </Text>
                    <Box as='button' px='5' py='1' bg='ocean' color='white' fontFamily='paragraph'>
                        <Link fade duration='0.3' to='/about'>Dowiedz się więcej</Link>
                        </Box>
                </VStack>
                </Box>
        </Box>
    </Flex>
  )
}

export default About