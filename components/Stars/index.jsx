import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import s from './styles.module.scss'

function Sun(props) {
  const arr1 = new Array(100).fill(0).map((_, i) => i)
  const arr2 = new Array(30).fill(0).map((_, i) => i)
  const arr3 = new Array(21).fill(0).map((_, i) => i)
  return (
    <div className={styles['starry-sky']}>
      <div className={styles['stars-1']}>
      {
        arr1.map(e=><span className={styles['star-1']} key={e}></span>)
      }
      </div>
      <div className={styles['stars-2']}>
      {
        arr2.map(e=><span className={styles['star-2']} key={e}></span>)
      }
      </div>
      <div className={styles['stars-3']}>
      {
        arr3.map(e=><span className={styles['star-3']} key={e}></span>)
      }
      </div>
    </div>
  )
}

Sun.propTypes = {}

export default Sun
