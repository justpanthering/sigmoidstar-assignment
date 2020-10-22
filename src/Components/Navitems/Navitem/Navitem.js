import React from 'react';

import Styles from './Navitem.module.css';

const navitem = props => {
  return (
    <div className={Styles.Navitem}>
      <a href='#'>
        {props.children}
      </a>
    </div>
  )
}

export default navitem;