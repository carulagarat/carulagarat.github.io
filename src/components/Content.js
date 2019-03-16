import React from "react";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section>
        <p>
          When I was a little, I would peel off the labels from shampoo bottles.
          Those labels served a purpose -as I my annoyed dad, pointed out; they
          let you tell shampoo and body gel apart-, but I found them confusing,
          packed with irrelevant information repeated in spanish and portuguese
          and were, in any case, very ugly. And relevance is always relative to
          the intended audience. Those bottles bomb users with information that
          is actually meant for the buyer. I, as a user, needed no more than a
          word on that label. A symbol, a single letter, maybe even a color, had
          we agreed to a color code - which we didn’t.
        </p>
        <p>
          I have a knack for communication relevancy. I find excess very
          annoying -and kind of tacky-. Digital users tend to agree with me: too
          much information, too many options, even too much blank space are
          every day harder to swallow. The best user experience is the one
          tailored to the audience at hand: this means users get to unravel your
          storytelling how and when they choose. In other words; the bottle has
          the information, but you can access it on your own terms.
        </p>
        <p>
          I’m a passionate designer and I think it takes understanding to
          perform the best design. It’s the only way to figure out why the user
          is peeling off your label.
        </p>
      </section>
    );
  }
}
