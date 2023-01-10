import React, { useRef, useLayoutEffect} from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { 
    VStack,
    Flex,
    Box,
    Image,
    Heading,
    Text,
    HStack,
    Avatar,

} from '@chakra-ui/react'
import '../../pages/blog/blog.css'
import { gsap } from 'gsap'

import photo from '../../images/team.png'

const Article = ({img, title, date, desc, author, avatar, to}) => {
    const ArticlesRef = useRef();

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {
            gsap.fromTo(ArticlesRef.current.children, {y:50, opacity: 0}, {scrollTrigger:{trigger: ArticlesRef.current.children, start: 'top 80%'}, y:0, opacity: 1, duration: 1.8})
        }, )

    }, [])

    return (
        
            <Flex gap='5' align='flex-start' justify='flex-start' direction={['column', 'column', 'row']} h={['none','none','auto']} ref={ArticlesRef}>
                <Box >
                    <Image src={img} boxSize='260px' objectFit='cover'
                        css='box-shadow: -17px -21px 0px 0px rgba(0,230,202,1);
                        -webkit-box-shadow: -17px -21px 0px 0px rgba(0,230,202,1);
                        -moz-box-shadow: -17px -21px 0px 0px rgba(0,230,202,1);'
                    />
                </Box>
                <VStack w='280px' align='flex-start'>
                    <Box bg='pink' px='2' py='1.5' alignItem='flex-start'>
                        <Text fontSize='xs' color='white' fontFamily='paragraph'>SEO</Text>
                        </Box>
                    <Text fontSize='xl' fontFamily='head' align='left'>
                        <Link fade to={`/blog${to}`}>{title}</Link>
                    </Text>
                    <Text align='left' color='#7B7485' fontFamily='paragraph'>Dodany: {date}</Text>
                    <Text fontFamily='paragraph'><div dangerouslySetInnerHTML={{ __html: desc}} /></Text>
                    <HStack>
                        <Avatar size='sm' src={avatar} />
                        <Text color='#7B7485'>{author}</Text>
                    </HStack>
                </VStack>
            </Flex>
    )
}

const Latest = () => {

    const data = useStaticQuery(graphql`
            query {
        allWpPost(limit: 4, sort: {date: DESC}) {
            nodes {
            author {
                node {
                name
                avatar {
                    url
                }
                }
            }
            featuredImage {
                node {
                localFile {
                    childImageSharp {
                    gatsbyImageData(width: 1280)
                    }
                }
                
                }
            }
            excerpt
            date(formatString: "DD.MM.YYYY")
            uri
            title
            }
        }
        }
    `)

    const posts = data.allWpPost.nodes;


  return (
    <Flex direction='column' mt='150'>
        <Heading fontSize={['3xl', '5xl', '6xl']} align='center'>Najnowsze artykuły</Heading>
        <Flex wrap='wrap' justify='center' gap='20' mt='100'>

            {posts.map(post => (
                <Article 
                to={post.uri}
                img={post?.featuredImage || photo}
                title={post.title}
                date={post.date}
                desc={post.excerpt}
                avatar={post.author.node.avatar.url}
                author={post.author.node.name}
                key={post.uri}
            />
            ))}
        </Flex>
    </Flex>
  )
}

export default Latest
