import React, {component, useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
function Contect(){
    return <div>
        

    {/* <!-- End of header  --> */}

    <section id="main-section">
        <div class="container contact-title">
            <h1 className="contact-title-heading">Contact Us</h1>
        </div>

        <div class="technology">
            <div class="technology-box">
                <div class="technology-box-tech">
                    <h2 class="technology-box-tech-heading">ADDRESS</h2>
                    <p class="technology-box-tech-para">
                        IEI Student Branch, A. D. Patel Institute Of Technology, New Vallabh Vidhyanagar, Anand, Gujarat.
                    </p>


                </div>

                <div class="technology-box-tech">
                    <h2 class="technology-box-tech-heading">CONTACT</h2>
                    <p class="technology-box-tech-para">
                        Deep Satani (Chairperson) <br/>
                        Hinal Thakrar (Vice Chairperson) <br/>
                        Prit Sapariya (Secretary)

                    </p>

                </div>

                <div class="technology-box-tech">
                    <h2 class="technology-box-tech-heading">EMAIL</h2>
                    <p class="technology-box-tech-para">
                        <a class="technology-box-tech-para-link" href="http://www.adit.ac.in/" target="_blank">adit.ac.in</a>
                    </p>

                </div>
            </div>

            {/* <!-- Google Map  --> */}

            <div class="map">
                <div class="map-box">

                    <div class="map-box-mapouter">
                        <div class="map-box-mapouter-canvas">
                            <iframe width="100%" height="500" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=AD%20Patel%20Institute%20of%20Technology%2C%20Anand%2C%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        <a href="https://putlocker-is.org">top putlockers movies</a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </section>

    {/* <!-- Footer Section  --> */}
    <Footer></Footer>
    </div>
    
}

export default Contect;