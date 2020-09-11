import React from "react";
import { Link, withPrefix } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'
import Portfolio from '../components/portfolio'


const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home" />

      <p className="light">
        I am a web developer with a passion for using the latest technologies to
        create interesting and functional websites. Please take a look through
        my projects below and feel free to 
        <Link to="/contact"> get in touch</Link>
      </p>

      <p>
        <a
          rel="noopener noreferrer"
          href={withPrefix("/simonbentleycv20.pdf")}
          target="blank"
        >
          Full CV
        </a>
      </p>

      <Portfolio />
    </Layout>
  )
  
}

export default IndexPage;


