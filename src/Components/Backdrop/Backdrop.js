import React from 'react';

// Styles
import Styles from './Backdrop.module.css';

const backdrop = (props) => {
  return (
    <div
      className={Styles.Backdrop}
      onClick={props.click}>

    </div>
  )
}

export default backdrop;