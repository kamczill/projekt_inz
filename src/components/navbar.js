import React, { useState } from 'react'
import {Link} from 'gatsby'
// import Link from 'gatsby-plugin-transition-link'
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Text, Box, Stack, Flex, Image} from '@chakra-ui/react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import logo from '../images/logo.png'

const MenuToggle = ({toggle, isOpen}) => {
  return (
    <Box display={{ base: 'block', md: 'none'}} onClick={toggle}>
      {isOpen ? <AiOutlineClose size='25px'/> : <AiOutlineMenu size='25px' />}
    </Box>
  )
}


const MenuItem = ({ key, to, name}) => {
  let activeStyle = {
    textDecoration: "underline",
    textDecorationThickness: '3px',
    textDecorationColor: '#00E6CA',
    transition: " .35s ease-in-out",
  };

  let activeClassName = "underline";

  return (
    <Link
        fade 
        duration='0.6'
        key={key}
        to={to}
        activeStyle={activeStyle}
      >
        <Text display='block' fontFamily='head'>
          {name}
        </Text>
      </Link>
  )
}

const MenuItems = ({ isOpen }) => {
  return(
    <Box
      display={{ base: isOpen ? 'block': 'none', md: 'block'}}
      flexBasis={{ base: '100%', md: 'auto'}}
    >
      <Stack
        spacing={8}
        align='center'
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem  to='/' name='Główna'/>
        <MenuItem  to='/about' name='O nas'/>
        <MenuItem  to={`/blog/`} name='Blog'/>
        <MenuItem  to='/contact' name='Kontakt'/>
        
      </Stack>
    </Box>
  )
}

const NavbarContainer = ({ children, props }) => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
    >
      {children}
    </Flex>
  )
}


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavbarContainer>
      <Box>
        <Link fade duration='0.3' to='/'>
        <Text fontFamily='logo' fontSize='3xl'>PROJEKT JKS</Text>
        {/* <Image src={logo} w='200px'/> */}
        </Link>
      </Box>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuItems isOpen={isOpen}/>

    </NavbarContainer>
  )
}

export default Navbar