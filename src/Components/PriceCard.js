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
            var image = this.props.data.img;

        }
        return (
            <div className="four columns" data-aos = "zoom-in">
                <img className="priceImage" src={image} alt="" />
            </div>
        );
    }
}

export default PriceCard;
