import React from "react";

export default class Gala extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="project">
        <h3>Gala</h3>
        <div className="row">
          <div className="deco left" />
          <div className="right text">
            <p className="intro">
              One of the most successful driving school franchises in Spain,{" "}
              <strong>Gala</strong> wants to make a <strong>game app</strong>{" "}
              for the <strong>theoretical driving test</strong>, to get students
              directly to driving lessons.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="deco right" />
          <div className="left text">
            <div>
              <h4>UX Challenges</h4>
              <p>
                The intended users are from 18 to 22 years old, and are{" "}
                <strong>
                  <em>profoundly bored</em> by the curriculum of this exam.
                </strong>{" "}
                It's actually usually taught through repetition of the same
                concepts over and over again. Most young people resort to apps
                and webs that do this exactly: drill the official questions from
                previous exams -which are public-, until your error rate is
                minimum.
              </p>
              <p>
                There's the added issue of users' contradictive perception: the
                game needs to feel <strong>cool and fun</strong>, but also{" "}
                <strong>trustworthy</strong>. These users are very driven by the
                objective of getting their license and will not experiment on
                something that might not be effective.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="deco left">
            <video autoPlay loop>
              <source src="https://dl.dropboxusercontent.com/s/7vdk1qp97cuux7b/gala-map.mp4" />
            </video>
          </div>
          <div className="text right">
            <div>
              <h4>UX Solutions</h4>
              <p>
                <strong>Making a game</strong> is a good way to get into these
                users' good graces. We decided to go with a very popular format:{" "}
                <strong>Candy Crush</strong>.
              </p>
              <p>
                Personally, I don't agree with the storytelling -too nerdy for
                these users-, but it shouldn't hurt too much, keeping in mind
                this same profile went through the cheesy storyline of Candy
                Crush with no problem.
              </p>
            </div>
          </div>
        </div>
        <div className="row even">
          <div className="deco right">
            <video autoPlay loop>
              <source src="https://dl.dropboxusercontent.com/s/9rto0lfcfdkavq6/gala-estadios.mp4" />
            </video>
          </div>
          <div className="text left">
            <div>
              <p>
                Long story short, the users find themselves abducted by aliens
                and are asked to compete in a driving competition. They'll drive
                through the map until the finish line, answering questions and
                beating aliens left and right.
              </p>
              <p>
                There are two rankings to feed the user's competitive drive: an
                in-app ranking against a series of imaginary characters and one
                against the user's contacts who are using the app. As the users
                advance in the map, they unlock goals that will get them
                stickers for their user-zone car.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="center">
              <p className="link">
                <strong>Art Board</strong>
                <a
                  target="_blank"
                  href="https://projects.invisionapp.com/boards/BU3TJDDFC92/"
                  rel="noopener noreferrer"
                >
                  InVision
                </a>
              </p>
            </div>
          </div>

      </div>
    );
  }
}
