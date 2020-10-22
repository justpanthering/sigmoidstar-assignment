import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// CSS
import Styles from './Body.module.css';

// COMPONENTS
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';

const body = () => {
  return (
    <div className={Styles.Body}>
      <BrowserRouter>
        <Navbar />
        <Content />
      </BrowserRouter>
    </div>
  )
}

export default body;