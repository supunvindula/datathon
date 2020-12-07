import React, { Component } from 'react';
import AOS from 'aos';

class Challenge extends Component {

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
      <section id="challenge">
        <div className="row work">

          <div className="three columns header-col">
            <h1 data-aos = "fade-right"><span>The Challenge</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>Still not confirmed.</p>
          </div>
        </div>

      </section>
    );
  }
}

export default Challenge;
