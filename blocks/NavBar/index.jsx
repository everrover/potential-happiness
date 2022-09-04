import React, { useState } from 'react'
import PropTypes from 'prop-types'
import s from './styles.module.scss'
import {I} from '../../components'
import Link from 'next/link'
import c from 'classnames'

function Navbar(props) {
  const [showNav, setShowNav] = useState(false)
  return (
    <nav className={s.nav_element}>
      <button className={s.toggle} onClick={e=>{
        e.preventDefault();
        setShowNav(!showNav)
      }}>
        <I icon={showNav?'times':'bars'} size='xl' color='cyan'/>
      </button>
      <section className={c(s.drawer, showNav?s['is-visible']:'')}>
        <div></div>
        <div className={s.page_links}>
          <Link href={"#github"}><div className={s.page_link}>About</div></Link>
          <Link href={"#github"}><div className={s.page_link}>Work</div></Link>
          <Link href={"#github"}><div className={s.page_link}>Tech</div></Link>
          <Link href={"#github"}><div className={s.page_link}>Projects</div></Link>
          <Link href={"#github"}><div className={s.page_link}>Contact</div></Link>
        </div>
        <div className={s.external}>
          <Link href={"github"}><I icon="github" type='HOV' color='blue' size='xl2'/></Link>
          <Link href={"instagram"}><I icon="instagram" type='HOV' color='blue' size='xl2'/></Link>
          <Link href={"linkedin"}><I icon="linkedin" type='HOV' color='blue' size='xl2'/></Link>
          <Link href={"twitter"}><I icon="twitter" type='HOV' color='blue' size='xl2'/></Link>
        </div>
      </section>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
