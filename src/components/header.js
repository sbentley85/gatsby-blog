import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import taranaki from '../assets/img/taranaki.jpg'
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
          
          <img src={taranaki} className={headerStyles.heroImage}/>
          
          
          <h1 className={headerStyles.title}>
          <Link  to="/">
            {data.site.siteMetadata.title}
          </Link>
          </h1>
        </div>
        
      
      
      
      
      
      
    </header>
  )
}

export default Header;  