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
      <div className="page">
        <div>
          <h1 className="hidden">Carula Garat</h1>
          <h2 className="hidden">UX/UI designer</h2>
          <h3>CV</h3>

          <div className="row">
            <div className="deco left">
              <h4>Cover letter</h4>
            </div>
            <p className="right text">
              <div>
                <p>
                  I've been creative my whole life. I even gave Fine Arts a try,
                  thinking my true calling would probably be shapes and colors.
                  To my surprise, my years through{" "}
                  <strong>Creative Advertising</strong> to
                  <strong>Graphic Design</strong> and later{" "}
                  <strong>UX Design</strong> lead me every day further from what
                  my work should look like and closer to how my work should be
                  experienced. I design in Photoshop, Sketch, InVision, ReactJS,
                  HTML5, Stylus and CSS: but{" "}
                  <strong>my most valuable tool is the user</strong>.
                </p>
              </div>
            </p>
          </div>

          <div className="row">
            <div className="deco right">
              <h4>Experience</h4>
            </div>
            <p className="text left">
              <div>
                <ul className="cvList">
                  <li>
                    <p>
                      <em>2016-2019</em>
                      <strong>UX/UI DESIGNER</strong>
                      <span>BinPar Digital Quality</span>
                      At BinPar, I learned to be a part of a multidisciplinary
                      development taskforce. I became an independent front-end
                      designer, shaping projects in environments such as
                      ReactJS, through HTML5, CSS3 and Javascript.
                    </p>
                  </li>
                  <li>
                    <p>
                      <em>2014-2016</em>
                      <strong>ART DIRECTOR | UX/UI | ILLUSTRATOR</strong>
                      <span>Freelance</span>
                      As a freelance I took care of UX and UI Design, defining
                      complete storytellings for my clients’ brands. Soon
                      enough, the end-user journey and its pace became much more
                      important to me than the specific colors, fonts and
                      images.
                    </p>
                  </li>
                  <li>
                    <p>
                      <em>2011-2013</em>
                      <strong>ART DIRECTOR</strong>
                      <span>Free Union Global Services</span>
                      Fresh out of college, I started as an Advertising Art
                      Director. I attended to my clients’ both communicational
                      and art needs, coming up with storytelling solutions that
                      I would generally execute myself in form of copies,
                      artworks, even guidelines.
                    </p>
                  </li>
                </ul>
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
