import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import s from '../../styles/components/sun.module.scss'

function Sun(props) {
  return (
    <div className={s["sun"]}>
      <div className={s["ray_box"]}>
          <div className={c(s["ray"], s["ray1"])}></div>
          <div className={c(s["ray"], s["ray2"])}></div>
          <div className={c(s["ray"], s["ray3"])}></div>
          <div className={c(s["ray"], s["ray4"])}></div>
          <div className={c(s["ray"], s["ray5"])}></div>
          <div className={c(s["ray"], s["ray6"])}></div>
          <div className={c(s["ray"], s["ray7"])}></div>
          <div className={c(s["ray"], s["ray8"])}></div>
          <div className={c(s["ray"], s["ray9"])}></div>
          <div className={c(s["ray"], s["ray10"])}></div>
      </div>
  </div>
  )
}

Sun.propTypes = {}

export default Sun
