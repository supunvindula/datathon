import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           {/* <ul className="social-links">
              {networks}
           </ul> */}

           <ul className="copyright">
              <li>&copy; Copyright 2020 - Association of Computer Engineering Students 2020 - All rights reserved.</li>
              <li>Design by <a title="Styleshout" href="">ACES</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
