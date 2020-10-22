import React, { Fragment, useState } from 'react';

// COMPONENTS
import Toolbar from '../../Components/Toolbar/Toolbar';
import Body from '../Body/Body';
import Sidedrawer from '../../Components/Sidedrawer/Sidedrawer';
import Backdrop from '../../Components/Backdrop/Backdrop';

const Layout = () => {

  const [isShowSidedrawer, setSidedrawer] = useState(false);

  const sidedrawerToggleHandler = () => {
    setSidedrawer(!isShowSidedrawer);
  }

  let sidedrawerJSX = null;

  if (isShowSidedrawer) {
    sidedrawerJSX =
      <Fragment>
        <Backdrop
          click={sidedrawerToggleHandler} />
        <Sidedrawer
          click={sidedrawerToggleHandler} />
      </Fragment>
  }

  return (
    <div>
      <Toolbar
        sidedrawer={sidedrawerToggleHandler} />
      <Body />
      {sidedrawerJSX}
    </div>
  )
}

export default Layout;