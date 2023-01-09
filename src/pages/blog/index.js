import React from 'react'
import Layout from '../../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { Flex, Image, VStack, Text, Heading, Avatar, Box, HStack, Grid, GridItem } from '@chakra-ui/react'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import photo from '../../images/team.png'
import Seo from '../../components/seo'

const Article = ({img, title, date, desc, author, avatar, to}) => {
    return (
            <Box>
            <Flex gap='5' align='flex-start' justify='flex-start' direction={['column', 'column', 'row']} h={['none','none','auto']}>
                <Box >
                    <Image src={img} boxSize='280px' objectFit='cover'
                        css='box-shadow: -17px -21px 0px 0px rgba(0,230,202,1);
                        -webkit-box-shadow: -17px -21px 0px 0px rgba(0,230,202,1);
                        -moz-box-shadow: -17px -21px 0px 0px rgba(0,230,202,1);'
                    />
                </Box>
                <VStack w='280px' align='flex-start'>
                    <Box bg='pink' px='2' py='1.5' alignItem='flex-start'>
                        <Text fontSize='xs' color='white' fontFamily='paragraph'>SEO</Text>
                        </Box>
                    <Heading fontSize='xl' fontFamily='head' align='left'>
                        <Link fade duration='0.3' to={`${to}`}>{title}</Link>
                    </Heading>
                    <Text align='left' color='#7B7485' fontFamily='paragraph'>Dodany: {date}</Text>
                    <Text fontFamily='paragraph' align='left'><div dangerouslySetInnerHTML={{ __html: desc}} /></Text>
                    <Box as='button' bg='blue' color='white' px='5' py='2'><Link fade duration='0.3' to={`${to}`}>Czytaj artykuł</Link></Box>
                    <HStack>
                        <Avatar size='sm' src={avatar} />
                        <Text color='#7B7485'>{author}</Text>
                    </HStack>
                </VStack>
            </Flex>
            </Box>
    )
}

const Index = () => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allWpPost {
                edges {
                node {
                    id
                    author {
                    node {
                        avatar {
                        url
                        }
                        name
                    }
                    }
                    excerpt
                    date(formatString: "DD.MM.YYYY")
                    featuredImage {
                    node {
                        localFile {
                        url
                        }
                    }
                    }
                    uri
                    title
                }
                }
            }
            }
    `)

    const articles = data.allWpPost.edges.map(article => (
        <Article 
            img={article.node.featuredImage?.url || photo}
            title={article.node.title}
            date={article.node.date}
            desc={article.node.excerpt}
            author={article.node.author.node.name}
            avatar={article.node.author.node.avatar.url}
            to={`/blog${article.node.uri}`} 
        />
        
    ))

  return (
    <Layout>
        <Seo 
        title='Blog'
        />
        <Heading fontSize='6xl'>Blog</Heading>
        <Flex direction='column' w='100%' align='center' justify='center'  pt='0rem'>
            <Flex direction='row' wrap='wrap' justify='center' gap='7rem' pt='4rem'>
                {articles}
            </Flex>
        </Flex>
    </Layout>
  )
}

export default Index
