import React from 'react';

import Styles from './Actions.module.css';

const actions = () => {
  const editClass = ['fa fa-pencil', Styles.ActionsItem].join(' ');
  const deleteClass = ['fa fa-trash-o', Styles.ActionsItem].join(' ');
  return (
    <div className={Styles.Actions}>
      <a href="#">
        <i className={editClass} aria-hidden="true"></i>
      </a>
      <a href="#">
        <i className={deleteClass} aria-hidden="true"></i>
      </a>
    </div>
  )
}

export default actions;