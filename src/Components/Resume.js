import React, { Component } from 'react';
import PriceCard from './PriceCard';
import AOS from 'aos';

class Resume extends Component {

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

    if (this.props.data) {
      
      var schedule = this.props.data.schedule.map(function (schedule) {
        return <div class="timeline" data-aos="fade-in">
          <div class="timeline-content" >
            <div class="timeline-year">{schedule.phase}</div>
            <h3 class="title">{ schedule.title }</h3>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
            </p>
          </div>
        </div>
      })


      var prices = this.props.data.prices.map((price) => {
        return (
          <PriceCard data={price} />
        )
      })

    }

    return (
      <section id="prices">

        <div className="row" >
          <div className="three columns header-col">
            <h1><span>Prizes</span></h1>
          </div>
        </div>
        <div className="row work">
          {prices}
        </div>

        <div className="row">

          <div className="three columns header-col">
            <h1><span>SCHEDULE</span></h1>
            <br></br>
          </div>
        </div>
        <div className="row work">
          <div className="columns main-col">
            <div class="main-timeline">
              {schedule}
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>The Challenge</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>Still not confirmed.</p>
          </div>
        </div>

        <div className="row">

          <div className="three columns header-col">
            <h1><span>Rules</span></h1>
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

export default Resume;
