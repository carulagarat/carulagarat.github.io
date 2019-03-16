import React from "react";

export default class Axon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="project">
        <h3>Axon</h3>
        <div className="row">
          <div className="deco left" />
          <div className="right text">
            <p className="intro">
              Amply experienced in redistribution of medical publications and
              material, <strong>Axon</strong> wants to redesign their website to
              stop their traditional users from using other online options.
            </p>
          </div>
        </div>
        <div className="row even">
          <div className="deco right">
            <video autoPlay loop>
              <source src="https://dl.dropboxusercontent.com/s/ngseonuck2wan6h/axon-old.mp4" />
            </video>
          </div>
          <div className="left text">
            <div>
              <h4>UX Challenges</h4>
              <p>
                Axon users have grown accustomed to a hard, unfriendly purchase
                process through the Client's 90s site. Their loyalty can only
                last for so long: and they're actually fleeing to other
                distributors that are less connected to the world of medicine,
                but bigger, faster and easy-to-use. Our goal is kind of simple:{" "}
                <strong>
                  Axon needs to be easy to use and transmit trustworthiness
                </strong>
                .
              </p>
              <p>
                A redesign might be the chance to do just that. I take the
                opportunity to revisit the site's information organization, the
                conversion process and the look and feel of the whole Axon
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="deco left">
            <img src="https://dl.dropboxusercontent.com/s/8bsnq0a0hl1u1qe/axon-hand-sketch.png" alt="Axon hand sketch" />
          </div>
          <div className="text right">
            <div>
              <h4>UX Solutions</h4>
              <p>
                The UX strategy rests on a single hypothesis: the users will
                stay with a smaller distributor{" "}
                <strong>if it offers seamless purchase and search</strong>. From
                that, we set three main goals. First and most important,{" "}
                <strong>a uniform experience</strong> throughout the site.
                Second, <strong>a proficient and ever-present search</strong>.
                And lastly, <strong>a personal profile</strong> that will allow the site to
                customize product display.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="center">
              <p className="link">
                <strong>site</strong>
                <a
                  target="_blank"
                  href="https://axon.es/"
                  rel="noopener noreferrer"
                >
                  axon.es
                </a>
              </p>
            </div>
          </div>
      </div>
    );
  }
}
