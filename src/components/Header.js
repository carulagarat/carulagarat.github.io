import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <header>
        <ul>
          <li>
            <Link to="/">
              Home we are at {this.props.route}
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </header>
    );
  }
}
