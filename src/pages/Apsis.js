import React from "react";

export default class Apsis extends React.Component {
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
        <h3>Apsis</h3>
        <div className="row">
          <div className="deco left" />
          <div className="right text">
            <p className="intro">
              <strong>APSIS MDM</strong> is a data gobernance company with very specific needs. Their employees have to make dozens of calls a day, and they need to make the process of updating data swifter and in a more controlled environment.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="deco right" />
          <div className="left text">
            <div>
              <h4>UX Challenges</h4>
              <p>
                The most obvious reason for slow results was, in this case, <strong>employee misinformation</strong>. Operators know they need to update as much information as possible in a call, but have no real sense of how much of that update has been truly completed.
              </p>
              <p>
                Entries completed incorrectly are sent back to the pool of pending actions by senior employees with no notification to the operator who updated it wrong.
              </p>
              <p>
                Calls could also be optimized if operators knew the connections between entries -profiles from the same company, for example-.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="deco left">
            <img src="https://dl.dropboxusercontent.com/s/adasxbwu09eg4lv/apsis-hand-sketch.png" alt="Apsis hand sketch" />
          </div>
          <div className="text right">
            <div>
              <h4>UX Solutions</h4>
              <p>
                After many meetings, I designed an experience that tried to give solution to two problems: <strong>operators' self-management</strong> and a call interface that kept <strong>all related information present and editable</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="center">
              <p className="link">
                <strong>Prototype</strong>
                <a
                  target="_blank"
                  href="https://invis.io/KEQY5E264QY"
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
