import React, { Component } from 'react';
import AOS from 'aos';

class About extends Component {

   componentDidMount() {
      // or simply just AOS.init();
      AOS.init({
         // initialise with other settings
         duration: 2000
      });
   }

   render() {

      return (
         <section id="about">
            <div className="row work">
               {/* <div className="three columns">
                  <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" />
               </div> */}
               <div className="columns">
                  <h2 className="about_title" data-aos="fade-up">COMPETITION IS FOR??</h2>
                  <p data-aos="fade-up">Datathon is open to all undergraduates of any recognized higher educational institute or University of Sri Lanka.</p>
                  <h2 className="about_title" data-aos="fade-up">Note about Registration:</h2>
                  <p data-aos="fade-up">Hurry up! Brace yourselves and gather your best teammates to secure your posts.</p>
                  <p data-aos="fade-up">Accepting Registrations Now !</p>
                  <h2 className="about_title" data-aos="fade-up">Data Enthusiastics</h2>
                  <p data-aos="fade-up">We have already sent the registration forms to the respective Departments. Please contact your Head of the Department and send us your  registration form through them.</p>

               </div>
            </div>

         </section>
      );
   }
}

export default About;
