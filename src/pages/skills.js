import React from "react"
import skillsStyles from './skills.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faVuejs,
  faNodeJs,
  faNpm,
  faSass,
  faGit
  
} from '@fortawesome/free-brands-svg-icons'

const SkillsPage = () => {
  return (
    <Layout>
      <Head title="Skills"/>
      
      <div id={skillsStyles.skillsContainer}>
        
        <FontAwesomeIcon icon={faHtml5} size="4x" title="HTML 5" className={skillsStyles.skillsIcon}/>
        <FontAwesomeIcon icon={faCss3Alt} size="4x" title="CSS 3" className={skillsStyles.skillsIcon}/>
        <FontAwesomeIcon icon={faJsSquare} size="4x" title="Javascript" className={skillsStyles.skillsIcon}/>
        <FontAwesomeIcon icon={faReact} size="4x" title="React" className={skillsStyles.skillsIcon}/>
        <FontAwesomeIcon icon={faVuejs} size="4x" title="Vue" />
        <FontAwesomeIcon icon={faNodeJs} size="4x" title="Node.js" className={skillsStyles.skillsIcon}/>
        <FontAwesomeIcon icon={faNpm} size="4x" title="npm" className={skillsStyles.skillsIcon}/>
        <FontAwesomeIcon icon={faSass} size="4x" title="Sass" className={skillsStyles.skillsIcon}/>
        <FontAwesomeIcon icon={faGit} size="4x" title="Git" className={skillsStyles.skillsIcon}/>
        
      </div>
      
    </Layout>
  )
}

export default SkillsPage;  