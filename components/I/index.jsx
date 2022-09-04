import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import styles from './styles.module.scss'
import icons from './icons.js'

function I(props) {
  const {icon, size="md", type="IN", color="green"} = props
  return <span className={c(
    styles.span,
    styles[size],
    styles[color],
    styles[type]
  )}>
    { icons[icon]||icons['default'] }
  </span>;
}

I.propTypes = {
  type: PropTypes.string, // INline, HOVerable, ACCede
  icon: PropTypes.string.isRequired, // icon
  size: PropTypes.string, // sm, md, lg, xl
  color: PropTypes.string, // green, blue, gray, pink, purple, orange, black, white
};

export default I;
