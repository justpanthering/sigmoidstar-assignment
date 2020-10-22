import React from 'react';

// Style
import { Form, Button } from 'react-bootstrap';
import Styles from './Header.module.css';

const header = () => {
  return (
    <div className={Styles.Header}>
      <div>
        <h3>Campaigns</h3>
      </div>
      <div className={Styles.FormGroup}>
        <Form className={Styles.Form}>
          <Form.Control type="text" placeholder="Search Campaign" />
          <Button variant="primary" type="submit"
            className={Styles.SubmitBtn}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </Button>
        </Form>
        <div>
          <Button className={Styles.CreateBtn}>Create Campaign</Button>
        </div>
      </div>
    </div>
  )
}

export default header;