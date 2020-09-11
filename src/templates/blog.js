import React from 'react';
import BlogLayout from '../components/blog-layout'
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

// query used for markdown 
/* export const query = graphql`
    query (
        $slug: String!
    ) {
        markdownRemark (
        fields: {
            slug:{
            eq: $slug
            }
        }
        ) {
        frontmatter {
            title
            date
        }
        html
        }
    }
`
*/

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(fromNow:true)
            body {
                json
            }    
            
        }
    }
`
 



const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <BlogLayout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h3>{props.data.contentfulBlogPost.title}</h3>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </BlogLayout>
    )
};

export default Blog;