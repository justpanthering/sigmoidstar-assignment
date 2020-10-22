import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// Style
import Styles from './Recent.module.css';
import { Alert } from 'react-bootstrap';

// COMPONENTS
import Actions from './Actions/Actions';
import Pagination from './Pagination/Pagination';

const Recent = () => {

  const [data, setData] = useState([
    {
      campaignName: 'test_notification',
      status: 'draft',
      opens: 0,
      clicks: 0
    }
  ]);

  const [error, setError] = useState("");

  useEffect(() => {
    Axios.get('/getCampaignList')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.log(error);
        setError("Unable to fetch from server. Please make sure that the server is running at localhost port 5000");
      })
  }, [])

  let dataJSX = null;
  let alertJSX = null;

  if (data.length > 0) {
    dataJSX = data.map(entry => {
      return (
        <tr key={Math.random()}>
          <td>{entry.campaignName}</td>
          <td>
            <button
              className={Styles.StatusBtn}>
              {entry.status}
            </button>
          </td>
          <td>{entry.opens}</td>
          <td>{entry.clicks}</td>
          <td><Actions /></td>
        </tr>
      );
    })
  }

  if (error !== "") {
    alertJSX =
      <Alert
        variant='danger'
        onClose={() => setError("")}
        dismissible>
        {error}
      </Alert>
  }

  let tableJSX =
    <table className="table">
      <thead className={Styles.Head}>
        <tr>
          <th scope="col">Campaign</th>
          <th scope="col">Status</th>
          <th scope="col">Opens</th>
          <th scope="col">Clicks</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {dataJSX}
      </tbody>
    </table>;

  return (
    <div className={Styles.Recent}>
      {alertJSX}
      {tableJSX}
      <Pagination
        current={1}
        totalEntries={5}
        entriesLimit={5} />
    </div>
  )
}

export default Recent;