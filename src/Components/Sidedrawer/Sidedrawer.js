import React from 'react';

// Style
import Styles from './Sidedrawer.module.css';

// Components
import Navitems from '../Navitems/Navitems';

const sidedrawer = (props) => {
  return (
    <div
      className={Styles.Sidedrawer}
      onClick={props.click}>
      <Navitems
        classPayload={Styles.Navitems} />
    </div>
  )
}

export default sidedrawer;