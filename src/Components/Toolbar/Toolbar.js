import React from 'react';

import '../../Assets/Global/GLOBAL_CSS.module.css';
import Styles from './Toolbar.module.css';

// COMPONENTS
import Navitems from '../Navitems/Navitems';

const toolbar = (props) => {
  return (
    <nav className={Styles.Toolbar}>
      <button
        className={Styles.MenuBtn}
        onClick={props.sidedrawer}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      <h3>Campaign Management</h3>
      <div className={Styles.Navitems}>
        <Navitems />
      </div>
    </nav>
  )
}

export default toolbar;