import React from 'react'
import PropTypes from 'prop-types'
import s from './introduction.module.scss'
import { Sun, Stars } from '../../components'

function Introduction(props) {
  return (<section className={s.section}>
    <div className={s.intro}>
      <h5><span>👋🏻</span>, Abhishek here!</h5>
      <h1>A software engineer</h1>
      <h3>
        Curiousity, a high focus on learning, consistency and problem solving being the core of that journey. 
        I love building software and I focus focus on engineering web applications and learning about cyber-security.
      </h3>
    </div>
    <div className={s.illus}>
      <img 
          className={s.illus}
          src="/em.svg"
          alt="logo"
          title="Everrover"
          loading="eager"/>
    </div>
  </section>
  )
}

Introduction.propTypes = {}

export default Introduction