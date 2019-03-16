import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/main.css';
import Home from '../pages/Home';
import Gala from '../pages/Gala';
import Apsis from '../pages/Apsis';
import Axon from '../pages/Axon';
import Cv from '../pages/Cv';

const MainLayout = () => (
  <Router>
    <div className="mainLayout">
      <Route component={Header} />
      <div className="mainContent">
        <Route exact path="/" component={Home} />
        <Route path="/cv" component={Cv} />
        <Route path="/projects" component={Projects} />
      </div>
    </div>
  </Router>
);

const Header = ({match}) => (
  <header>
    <ul>
      <li>
        <Link to="/">
          Carula Garat
          <span>
            UX/UI designer
          </span>
        </Link>
      </li>
      <li>
        <ActivateMenuLink to="/projects" label="Projects" />
      </li>
      <li>
        <ActivateMenuLink to="/cv" label="CV" />
      </li>
    </ul>
  </header>
);

const ActivateMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Link className={match ? "active" : ""} to={to}>{label}</Link>
    )}
  />
);

const Projects = ({ match }) => (
  <div className="page">
    <div>
      <h2 className="hidden">Projects</h2>
      <Route path={`${match.url}/:projectId`} component={Trick} />
      <ul 
        className="projectMenu"
      >
        <li>
          <ActivateProjectLink to={`${match.url}/axon`} label="Axon" />
        </li>
        <li>
          <ActivateProjectLink to={`${match.url}/apsis`} label="Apsis" />
        </li>
        <li>
          <ActivateProjectLink to={`${match.url}/gala`} label="Gala" />
        </li>
        <li className="close-link">
          <Link to="/projects" />
        </li>
      </ul>

      <Route path="/projects/gala" component={Gala} />
      <Route path="/projects/apsis" component={Apsis} />
      <Route path="/projects/axon" component={Axon} />
    </div>
  </div>
);

const Trick = ({ match }) => <div className={`selected hidden ${match.params.projectId}`}></div>;

const ActivateProjectLink = ({ label, to }) => (
  <Route
    path={to}
    children={({ match }) => (
      <Link className={match ? "active" : ""} to={to}>
        {label}
      </Link>
    )}
  />
);

export default MainLayout;