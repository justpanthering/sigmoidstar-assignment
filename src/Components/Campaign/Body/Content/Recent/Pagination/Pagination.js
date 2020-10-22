import React, { Fragment } from 'react';

// Styles
import Styles from './Pagination.module.css';
import Pagination from 'react-bootstrap/Pagination'

const pagination = props => {
  //props.totalEntries: total no of entries available
  //props.entriesLimit: no of entries to be displayed
  //props.current: current page

  let paginationJSX = null;
  let prev = props.current - 1;
  let next = props.current + 1;

  // Check if next page exists on page 1
  let nextJSX = null
  if (props.totalEntries / props.entriesLimit > 1) {
    nextJSX =
      <Fragment>
        <Pagination.Item>{next}</Pagination.Item>
        {
          props.totalEntries / props.entriesLimit > 2
            ?
            <Fragment>
              <Pagination.Ellipsis />

              <Pagination.Item>{props.totalEntries / props.entriesLimit}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Fragment>
            :
            <Fragment>
              <Pagination.Next disabled />
              <Pagination.Last disabled />
            </Fragment>
        }
      </Fragment>
  }
  else {
    nextJSX =
      <Fragment>
        <Pagination.Item disabled>{next}</Pagination.Item>
        <Pagination.Next disabled />
        <Pagination.Last disabled />
      </Fragment>
  }

  if (props.current === 1) {
    paginationJSX =
      <Pagination>
        <Pagination.First disabled />
        <Pagination.Prev disabled />
        <Pagination.Item active>{1}</Pagination.Item>
        {nextJSX}

      </Pagination>
  }
  else if (props.current === props.totalEntries / props.entriesLimit) {
    paginationJSX =
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{prev}</Pagination.Item>
        <Pagination.Item active>{props.current}</Pagination.Item>
        <Pagination.Next disabled />
        <Pagination.Last disabled />

      </Pagination>
  }
  else {
    paginationJSX =
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{prev}</Pagination.Item>
        <Pagination.Item active>{props.current}</Pagination.Item>
        <Pagination.Item>{next}</Pagination.Item>
        <Pagination.Ellipsis />

        {}
        <Pagination.Item>{props.totalEntries / props.entriesLimit}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />

      </Pagination>
  }

  return (
    <div
      className={Styles.PaginationContainer}>
      {paginationJSX}
    </div>
  )
}

export default pagination;