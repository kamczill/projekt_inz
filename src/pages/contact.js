import React from 'react'
import Header from '../components/contact/Header'
import ContactForm from '../components/contact/ContactForm'
import ContactDetails from '../components/contact/ContactDetails'
import Layout from '../components/layout'
import Seo from '../components/seo'


const Contact = () => {
  return (
    <>
    <Seo 
        title='Kontakt'
    />
    <Layout>
      <Header/>
      <ContactDetails/>
      <ContactForm/>
      </Layout>
    </>
  )
}

export default Contact