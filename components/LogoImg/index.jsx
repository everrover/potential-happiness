/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PropTypes from 'prop-types'

export default function LogoImg(props) {
  const {size="h-32 w-auto", inline=false} = props
  return (
    // <ToolTip text="Everrover" position="bottom" color="green" size="lg">
      <div className={`${size} text-center`}>
        <img 
          className={`${size} ${inline? "inline": ""}`}
          src="/logo.svg"
          alt="logo"
          title="Everrover"
          loading="eager"/>
      </div>
    // </ToolTip>
  )
}

LogoImg.propTypes = {
  size: PropTypes.string,
  inline: PropTypes.bool,
}