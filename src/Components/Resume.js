import React, { Component } from 'react';
import ParticlesBg from "particles-bg";
import PriceCard from './PriceCard';

class Resume extends Component {

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
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var schedule = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })

      var skills = this.props.data.skills.map((skills) => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          
          <li key={skills.name}>
            <span style={{ width: skills.level, backgroundColor: this.getRandomColor() }} className={className}></span><em>{skills.name}</em>
          </li>
        )
      })

      var prices = this.props.data.prices.map((price) => {
        return (
          <PriceCard data={price} />
        )
      })

    }

    return (
      <section id="prices">


        {/* 
        <div className="row education" >
          
          <div className="three columns header-col">
            <h1><span>Prizes</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>
        */}

        <div className="row" >
          <div className="three columns header-col">
            <h1><span>Prizes</span></h1>
          </div>
        </div>
        <div className="row work">
          {prices}
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>SCHEDULE</span></h1>
          </div>

          <div className="nine columns main-col">
            {schedule}
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
