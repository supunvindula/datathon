import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div className="row">
               {/* <div className="three columns">
                  <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" />
               </div> */}
               <div className="columns">
                  <h2 className="about_title">COMPETITION IS FOR??</h2>
                     <p>Datathon is open to all undergraduates of any recognized higher educational institute or University of Sri Lanka.</p>
                  <h2 className="about_title">Note about Registration:</h2>
                     <p>Hurry up! Brace yourselves and gather your best teammates to secure your posts.</p>
                     <p>Accepting Registrations Now !</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2 className="about_title">Faculty of Engineering, UOP Undergraduates</h2>
                        <p>All the undergraduates of Faculty of Engineering,University of Peradeniya should participate Pre-Datathon to get qualified into ACES Datathon. Registrations for the Pre-Datathon will be notified through the Department.</p>
                     </div>
                     <div className="columns contact-details">
                        <h2 className="about_title">Other Undergraduates</h2><br></br>
                        <p>We have already sent the registration forms to the respective Departments. Please contact your Head of the Department and send us your  registration form through them.</p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
