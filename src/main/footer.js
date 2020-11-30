import React, {component, useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import logo1 from '../img/logo1.png';
import logo2 from '../img/logo2.png';
import linkedin from "../img/linkedin.png";
import youtube from "../img/youtube.png";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png"; 
function Footer(){
    return <div>
        <footer id="footer">
            <div class="foot-cont">
                <div class="foot-cont-foot1">
                    <span className="foot-cont-foot1-heading">
                        <h2 className="foot-cont-foot1-heading-text">Site Map</h2>
                    </span>
                    <hr/>
                    <p class="foot-cont-foot1-para">
                        <a className="foot-cont-foot1-para-link" href="http://www.adit.ac.in/" target="_blank">About ADIT</a>  <br/> <br/>
                        <a className="foot-cont-foot1-para-link"  href="https://www.cvmu.edu.in/" target="_blank">About CVM</a> <br/><br/>
                        <a className="foot-cont-foot1-para-link"  href="https://www.ieindia.org/webui/iei-home.aspx" target="_blank">About IEI</a> <br/> <br/>
                        <a className="foot-cont-foot1-para-link" href="#">IEI SB ADIT</a>
                    </p>
                </div>
                <div class="foot-cont-foot1">
                    <span  className="foot-cont-foot1-heading">
                        <h2 className="foot-cont-foot1-heading-text">ADIT</h2>
                    </span>
                    <hr/>
                    <div class="foot-cont=-imgbox">
                        <img className="foot-cont-imgbox-image" src={logo2} alt="logo2" srcset=""/>
                        <img className="foot-cont-imgbox-image" src={logo1} alt="logo1" srcset=""/>
                    </div>
                </div>
                <div class="foot-cont-foot1">
                    <span className="foot-cont-foot1-heading">
                        <h2 className="foot-cont-foot1-heading-text">Other Links</h2>
                    </span>
                    <hr/>
                    <p class="foot-cont-foot1-para">
                        <a className="foot-cont-foot1-para-link" href="https://www.linkedin.com/in/iei-adit-0a882b18a" target="_blank"><img src={linkedin} alt="" className="socialmedia"/>&nbsp;&nbsp;LinkedIn</a>  <br/> <br/>
                        <a className="foot-cont-foot1-para-link" href="https://www.facebook.com/iei.adit.sb" target="_blank"><img src={facebook} alt="" className="socialmedia"/>&nbsp;&nbsp;Facebook</a> <br/><br/>
                        <a className="foot-cont-foot1-para-link" href="https://twitter.com/AditIei" target="_blank"><img src={twitter} alt="" className="socialmedia"/>&nbsp;&nbsp;Twitter</a> <br/> <br/>
                        <a className="foot-cont-foot1-para-link" href="https://www.youtube.com/channel/UClhJrIdE9udLK8qSvpe8kjA" target="_blank"><img src={youtube} alt="" className="socialmedia"/>&nbsp;&nbsp;YouTube</a>
                    </p>
                </div>
            </div>
            <div class="footend">
                <p class="footend-copyright">
                    © 2020 IEI SB ADIT. All rights reserved | Design by IEI SB, ADIT
                </p>
            </div>
        </footer>
    </div>;
}
export default Footer;