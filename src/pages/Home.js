import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="page home">
        <div>
          <h1 className="hidden">Carula Garat</h1>
          <h2 className="hidden">UX/UI designer</h2>
          <p className="fakeH1">
            <span>Thou</span>
            <span>shalt</span>
            <span>not</span>
            <span>bore.</span>
          </p>
          <div className="row">
            <div className="deco left" />
            <p className="right text">
              <div>
                <p>
                  More than a mantra - <strong>a commandment</strong> that
                  should never be overviewed. In the world we live in, we{" "}
                  <strong>user experience designers</strong> should{" "}
                  <em>always</em> assume our intended users have{" "}
                  <strong>no time for empty experiences</strong>.
                </p>
                <p>
                  I stick to that in every aspect of my life - including my job.
                </p>
              </div>
            </p>
          </div>

          <div className="row">
            <div className="center">
              <p className="link">
                <strong>Mail</strong>
                <a
                  target="_blank"
                  href="mailto:carulagarat@gmail.com"
                  rel="noopener noreferrer"
                >
                  carulagarat@gmail.com
                </a>
              </p>
              <p className="link">
                <strong>Tel</strong>
                <a
                  target="_blank"
                  href="tel:0034600044026"
                  rel="noopener noreferrer"
                >
                  +34 600 044 026
                </a>
              </p>
              <p className="link">
                <strong>medium</strong>
                <a
                  target="_blank"
                  href="https://medium.com/@carulagarat"
                  rel="noopener noreferrer"
                >
                  @carulagarat
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
