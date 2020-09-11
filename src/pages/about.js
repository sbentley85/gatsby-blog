import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />

      <p className="light">
        My name is Simon, I'm a web developer based in London.
      </p>
      <p className="light"></p>
      <p className="light">
        I started learning web development in 2019 and since making my first
        Hello World! React app I was hooked and realised that this was something
        I am passionate about and can excel at. I have a hunger to learn new
        skills and to be constantly improving and I'm excited to apply that
        hunger to a career in web developement.
      </p>
      <p className="light">
        I'm currently looking for a role as a web developer so if you'd like to
        discuss what I can bring to your company or project please <Link to="/contact">get in touch</Link>
      </p>
    </Layout>
  )
}

export default AboutPage;  
