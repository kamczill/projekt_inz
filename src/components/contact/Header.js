import React from 'react'

import { Flex, Heading, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex direction='column' mt='3rem' w='100%' align='center'>
        <Heading fontFamily='head' fontSize={['4xl','4xl', '5xl', '7xl']} maxW='1200px' align='center'>Nasz zespół ma siedzibe na Uniwerystecie</Heading>
        <Text fontFamily='paragraph' fontSize='1.1rem' color='gray.600' align='center' maxW='1200px'>
          Możesz nas spotkać 2 razy w miesiącu na uczelni we wtorki. Chętnie dzielimy się wiedzą, ciekawostkami i radami.
        </Text>
    </Flex>
  )
}

export default Header