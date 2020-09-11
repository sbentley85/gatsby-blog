import React from "react"
import Footer from '../components/footer'

import '../styles/index.scss'
import blogLayoutStyles from './blog-layout.module.scss'


const BlogLayout = (props) => {
    return (
        <div className={blogLayoutStyles.container}>
            <h1><a href="/blog">My Coding blog</a></h1>
            <div className={blogLayoutStyles.content}>
                
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default BlogLayout;