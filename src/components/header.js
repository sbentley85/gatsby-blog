import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import taranaki from '../assets/img/taranaki2.jpg'
//import './header.module.scss'
import headerStyles from './header.module.scss'


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <header className={headerStyles.header}>
        <div className={headerStyles.heroWrapper}>
        <Link  to="/">
          <img src={taranaki} className={headerStyles.heroImage} alt="Mount Taranaki"/>
          <h1 className={headerStyles.title}>
          
            {data.site.siteMetadata.title}
          
          </h1>
          </Link>
        </div>
        
      
      
      
      
      
      
    </header>
  )
}

export default Header;  