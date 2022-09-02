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
        I'm a software engineering professional. Curiousity, a high focus on learning, consistency and problem solving being my core virtues in that journey. 
        I love working with software, but since we can't do everything at the same time, I currently focus on building web applications(both front-end and back-end) and learning about cyber-security.
        In all that, my ethic being <mark>Work hard, play hard</mark>.
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