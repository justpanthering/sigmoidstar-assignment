import React from 'react';

// Style
// import Styles from './Content.module.css';

// Components
import Recent from './Recent/Recent';
import Sent from './Sent/Sent';
import Scheduled from './Scheduled/Scheduled';
import Draft from './Draft/Draft';

import { Route, Switch } from 'react-router-dom';

const content = () => {
  return (
    <div>
      <Switch>
        <Route
          path="/sent"
          component={Sent} />
        <Route
          path="/scheduled"
          component={Scheduled} />
        <Route
          path="/draft"
          component={Draft} />
        <Route
          path="/"
          component={Recent} />
      </Switch>
    </div>
  )
}

export default content;