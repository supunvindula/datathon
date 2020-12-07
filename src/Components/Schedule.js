import React, { Component } from 'react';
import AOS from 'aos';

class Schedule extends Component {

    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
            // initialise with other settings
            duration: 2000
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

            var schedule = this.props.data.schedule.map(function (schedule) {
                return <div class="timeline" data-aos={schedule.animation}>
                    <div class="timeline-content" >
                        <div class="timeline-year">{schedule.phase}</div>
                        <h3 class="title">{schedule.title}</h3>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
            </p>
                    </div>
                </div>
            })


        }

        return (
            <section id="schedule">

                <div className="row">

                    <div className="three columns header-col">
                        <h1 data-aos = "fade-right"><span>SCHEDULE</span></h1>
                        <br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="columns main-col">
                        <div class="main-timeline">
                            {schedule}
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Schedule;
