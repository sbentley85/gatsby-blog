import React from "react"
import Footer from '../components/footer'
import Header from '../components/header'

import '../styles/index.scss'
import blogLayoutStyles from './blog-layout.module.scss'


const BlogLayout = (props) => {
    return (
        <div className={blogLayoutStyles.container}>
            <Header />
            <div className={blogLayoutStyles.content}>
                
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default BlogLayout;