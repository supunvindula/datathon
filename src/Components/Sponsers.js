import React, { Component } from 'react';
import AOS from 'aos';

class Sponsers extends Component {

    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 2000
        });
    }
    render() {

        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var projectImage = 'images/portfolio/' + projects.image;

                return (
                    <div key={projects.title} className="columns sponsers-item" data-aos="flip-right">
                        <div className="item-wrap">
                            <a href={projects.url} title={projects.title}>
                                <img alt={projects.title} src={projectImage} />
                                <div className="overlay">
                                    <div className="sponsers-item-meta">
                                        <h5>{projects.title}</h5>
                                        <p>{projects.category}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                )
            })
        }

        return (
            <section id="sponsers">

                <div className="row">
                    <div className="twelve columns">
                        <h1 data-aos = "fade-right"><span>SPONSERS</span></h1>
                        <br></br>
                    </div>
                </div>
                <div className="twelve columns collapsed">
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" >
                        {projects}
                    </div>
                </div>
            </section>
        );
    }
}

export default Sponsers;
