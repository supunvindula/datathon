import React, { Component } from 'react';
import PriceCard from './PriceCard';
import AOS from 'aos';

class Prices extends Component {

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
            <h1 data-aos = "fade-right"><span>Prizes</span></h1>
          </div>
        </div>
        <div className="row">
          {prices}
        </div>
        <br />
      </section>
    );
  }
}

export default Prices;
