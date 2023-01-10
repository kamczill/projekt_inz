import React from "react"
import { Link, graphql } from "gatsby" //highlight-line
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/home/Header"
import Features from "../components/home/Features"
import Latest from "../components/home/Latest"
import About from "../components/home/About"
import Newsletter from "../components/home/Newsletter"
// // WP Gatsby - Wersja 2.3.3

export default function Home({ data }) {
  return (
    <ParallaxProvider>
      <Layout>
        <SEO title="home" />
        <Header/>
        <Features/>
        <Latest />
        <About />
        <Newsletter />      
      </Layout>
    </ParallaxProvider>
  )
}
