import React from 'react';

// Style
import Styles from './Campaign.module.css';

// COMPONENTS
import Header from './Header/Header';
import Body from './Body/Body';

const campaign = () => {
  return (
    <div className={Styles.Campaign}>
      <Header />
      <Body />
    </div>
  )
}

export default campaign;