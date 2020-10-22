import React from 'react';

// CSS
import Styles from './Navbar.module.css';
import { Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const navbar = props => {

  return (
    <Nav
      variant="tabs"
      defaultActiveKey="home"
      className={Styles.Navbar}>
      <Nav.Item>
        <Nav.Link
          eventKey="home"
          as={Link}
          to="/">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <span className={Styles.NavText}>
            Recent
          </span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="sent"
          as={Link}
          to="/sent">
          <i className="fa fa-check" aria-hidden="true"></i>
          <span className={Styles.NavText}>
            Sent
          </span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="scheduled"
          as={Link}
          to="/scheduled">
          <i className="fa fa-calendar-o" aria-hidden="true"></i>
          <span className={Styles.NavText}>
            Scheduled
          </span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="draft"
          as={Link}
          to="/draft">
          <i className="fa fa-pencil" aria-hidden="true"></i>
          <span className={Styles.NavText}>
            Draft
          </span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default navbar;