import React, { Component } from 'react';
import AOS from 'aos';

class Rules extends Component {

  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {

    return (
      <section id="rules">
        <div className="row">

          <div className="three columns header-col">
            <h1 data-aos = "fade-right"><span>Rules</span></h1>
          </div>

          <div className="nine columns main-col">
            <p><span>&bull;</span> A team should include three members (or less) at most.</p>
            <p><span>&bull;</span> The problems will be uploaded to the competition web site by the organizing committee and judging will be done by the judging panel.</p>
            <p><span>&bull;</span> The general rule of the thumb is that the team that obtains the highest score in the overall 3 phases will win the competition.</p>
            <p><span>&bull;</span> Every code submitted at the competition will be checked for plagiarism.</p>
            <p><span>&bull;</span> The decision of the judges is final.</p>

          </div>
        </div>

      </section>
    );
  }
}

export default Rules;
