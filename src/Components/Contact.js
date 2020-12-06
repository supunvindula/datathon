import React, { Component } from 'react';

class Contact extends Component {
   render() {

      return (
         <section id="contact">
            <div className="row">
               <div className="six columns">
                  <h4 className="widget-title">Contact US</h4>
                  <i class="fas fa-map-marker-alt"></i><span><p>University of Peradeniya, Prof. E. O. E. Pereira Mawatha, Kandy, Sri Lanka</p></span>
                 
                  <h4 className="widget-title">Follow US</h4>
                  <ul className="followUs">
                     <li><a href="https://www.facebook.com/acespera/" target="_blank">
                        <i class="fab fa-facebook" tabindex="0"></i>
                     </a></li>
                     <li><a href="#">
                        <i class="fab fa-youtube" tabindex="0" target="_blank"></i>
                     </a></li>
                  </ul>
               </div>
               <div className="six columns">
                  <div>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15831.544195787757!2d80.591638!3d7.253808000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfcecb1ac7b82edec!2sIESL%20Students&#39;%20Chapter%20-%20University%20of%20Peradeniya!5e0!3m2!1sen!2sus!4v1607275530570!5m2!1sen!2sus"></iframe>
                  </div>
               </div>
            </div>
            <br></br>
            <div className="row section-head">
               <aside className="columns footer-widgets">
                  <div className="widget widget_tweets">
                     <h4 className="widget-title">Latest Tweets</h4>
                     <div class="slider">
                        <div class="slider-text1">
                           <ul id="twitter">
                              <li>
                                 <span>
                                    This is tweet 1.This is tweet 1.This is tweet 1.This is tweet 1.
                                    <a href="#">http://t.co/CGIrdxIlI3</a>
                                 </span>
                                 <b><a href="#">2 Days Ago</a></b>
                              </li>
                           </ul>
                        </div>
                        <div >
                           <ul id="twitter">
                              <li>
                                 <span>
                                    This is tweet 2.This is tweet 2.This is tweet 2.This is tweet 2.
                                    <a href="#">http://t.co/CGIrdxIlI3</a>
                                 </span>
                                 <b><a href="#">2 Days Ago</a></b>
                              </li>
                           </ul>
                        </div>
                        <div>
                           <ul id="twitter">
                              <li>
                                 <span>
                                    This is tweet 3.This is tweet 3.This is tweet 3.This is tweet 3.This is tweet 3.This is tweet 3.
                                    <a href="#">http://t.co/CGIrdxIlI3</a>
                                 </span>
                                 <b><a href="#">2 Days Ago</a></b>
                              </li>
                           </ul>
                        </div>
                        <div >
                           <ul id="twitter">
                              <li>
                                 <span>
                                    This is tweet 4.This is tweet 4.This is tweet 4.This is tweet 4.This is tweet 4.This is tweet 4.This is tweet 4.
                                    <a href="#">http://t.co/CGIrdxIlI3</a>
                                 </span>
                                 <b><a href="#">2 Days Ago</a></b>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </aside>

            </div>
            {/* <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form action="" method="post" id="contactForm" name="contactForm">
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                        </div>

                        <div>
                           <button className="submit">Submit</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>

                  <div className="widget widget_tweets">
                     <h4 className="widget-title">Latest Tweets</h4>
                     <ul id="twitter">
                        <li>
                           <span>
                              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">2 Days Ago</a></b>
                        </li>
                        <li>
                           <span>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">3 Days Ago</a></b>
                        </li>
                     </ul>
                  </div>
               </aside>
            </div> */}


         </section>
      );
   }
}

export default Contact;
