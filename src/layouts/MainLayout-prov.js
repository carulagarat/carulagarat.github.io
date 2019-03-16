import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/main.css';

const MainLayout = () => (
  <Router>
    <div>
      <Route component={Header} />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Header = ({match}) => (
  <header>
    <ul>
      <li>
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
      </li>
      <li>
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/about" label="About" />
      </li>
      <li>
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/topics" label="Topics" />
      </li>
    </ul>
  </header>
);

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "active" : ""}>
        {match ? "> " : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default MainLayout;