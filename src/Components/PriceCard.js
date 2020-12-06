import React, { Component } from 'react';
import AOS from 'aos';

class PriceCard extends Component {
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 2000
        });
      }
    render() {

        if (this.props.data) {
            var headding = this.props.data.headding;
            var price = this.props.data.price;
            var lable = this.props.data.lable;

        }
        return (
            <div className="four columns body-winner" data-aos = "zoom-in">
                <div class="winner-wrap">
                    <div class="border"></div>
                    <div class="medal-box"><i class="fas fa-medal"></i></div>
                    <h1>{headding}</h1>
                    <h2>{price}</h2>
                    <div class="winner-ribbon">{lable}</div>
                    <div class="right-ribbon"></div>
                    <div class="left-ribbon"></div>
                </div>
                <div class="team-wrap">
                    {/* <div class="member-pic"><img src="https://randomuser.me/api/portraits/men/46.jpg" /></div>
          <div class="member-pic"><img src="https://randomuser.me/api/portraits/men/36.jpg" /></div>
          <div class="member-pic"><img src="https://pbs.twimg.com/profile_images/1061275018926194690/6MWH9Xi_.jpg" /></div> */}
                </div>
            </div>
        );
    }
}

export default PriceCard;
