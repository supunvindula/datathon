import React, { PropTypes, Component } from 'react';
import ParticlesBg from "particles-bg";
import Countdown from './Countdown';

class Header extends Component {
   render() {
      const currentDate = new Date();
      const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

      if (this.props.data) {
         var project = this.props.data.project;
         var github = this.props.data.github;
         var name = this.props.data.name;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var logo = "images/" + this.props.data.logo;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
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
                  <img className="profile-pic" src={logo} alt="DATATHON 2020" />
                  <h3>{description}.</h3>
                  <br />
                  <hr />
                  <ul className="social">
                     <Countdown date={`${year}-12-24T00:00:00`} />
                  </ul>
                  <ul className="social">
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
