import React from 'react';

import Styles from './Navitems.module.css';

// COMPONENTS
import Navitem from './Navitem/Navitem';

const navitems = (props) => {
  let navClasses = [Styles.Navitems, props.classPayload].join(" ");
  return (
    <div className={navClasses}>
      <ul>
        <li>
          <Navitem>Dashboard</Navitem>
        </li>
        <li>
          <Navitem>Campaigns</Navitem>
        </li>
        <li>
          <Navitem>Mailing List</Navitem>
        </li>
        <li>
          <Navitem>Templates</Navitem>
        </li>
      </ul>
    </div>
  )
}

export default navitems