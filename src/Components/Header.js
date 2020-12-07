import React, { PropTypes, Component } from 'react';
import ParticlesBg from "particles-bg";
import Countdown from './Countdown';
import AOS from 'aos';

class Header extends Component {
   componentDidMount() {
      // or simply just AOS.init();
      AOS.init({
         // initialise with other settings
         duration: 2000
      });
   }
   render() {
      const currentDate = new Date();
      const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

      if (this.props.data) {
         var project = this.props.data.project;
         var organizedBy = this.props.data.organizedBy;
         var bio = this.props.data.bio;
         var logo = "images/" + this.props.data.logo;

      }

      return (
         <header id="home" style={{ "height": "847.8px" }}>
            {/* <ParticlesBg color="#034460" type="circle" bg={true} /> */}
            {/* <ParticlesBg color="#EE7E4E" type="circle" bg={true} /> */}
            <ParticlesBg type="circle" bg={true} />
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#prices">Prices</a></li>
                  {/* <li><a className="smoothscroll" href="#portfolio">Winners</a></li> */}
                  <li><a className="smoothscroll" href="#sponsers">Sponsers</a></li>
               </ul>
            </nav>

            <div className="row banner">

               <div className="banner-text">
                  {/* <h1 className="responsive-headline">{name}</h1> */}
                  <img className="profile-pic" src={logo} alt="DATATHON 2020" data-aos="fade-in" />
                  <h3 data-aos="zoom-in-down">Organized by ACES</h3>
                  <h3 data-aos="zoom-in-left">{organizedBy}</h3>
                  <h3 data-aos="zoom-in-right">{bio}</h3>
                  <hr />
                  <ul className="social" data-aos="fade-left">
                     <Countdown date={`${year}-12-24T00:00:00`} />
                  </ul>
                  <ul className="social bounce" data-aos="fade-right">
                     <a href={project} target="_blank" className="button btn project-btn"><i className="fa fa-book"></i>Register Now!</a>
                     {/* <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a> */}
                  </ul>
                  <hr />
               </div>
               <br />
            </div>
            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
            {/* <h1 className="responsive-headline" style={{ "margin": "auto", "width": "60%", "text-align": "center", "color": "white" }}>MORE</h1> */}
         </header>
      );
   }
}

export default Header;
