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
            <div class="icon-bar">
            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
            <a href="#" class="google"><i class="fa fa-google"></i></a>
            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
            </div> 
            {/* <div class="s_stk ss-ic"> 
              <ul> 
                <li> <a title="facebook share" class="s_fb" target="_blank" href=""></a> </li> 
                <li> <a title="twitter share" class="s_tw" target="_blank" href=""> </a> </li>
                <li> <a title="whatsapp share" class="s_wp" target="_blank" href="https://api.whatsapp.com/send?text=https://www.buddy4study.com/article/gujarat-scholarship" data-action="share/whatsapp/share"></a> </li>
                <li> <a title="reddit share" class="s_rd" target="_blank" href="https://reddit.com/submit?url=https://www.buddy4study.com/article/gujarat-scholarship&amp;title=Digital Gujarat Scholarship 2020 – Last Date, Gujarat Scholarship Portal, Eligibility"></a> </li>
                <li> <a title="tumblr share" class="s_tb" target="_blank" href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=https://www.buddy4study.com/article/gujarat-scholarship"></a> </li> 
                <li> <a title="telegram share" class="s_tg" target="_blank" href="https://telegram.me/share/url?url=https://www.buddy4study.com/article/gujarat-scholarship&amp;text=Digital Gujarat Scholarship 2020 – Last Date, Gujarat Scholarship Portal, Eligibility"></a> </li>
             </ul> 
            </div> */}
        </footer>
{/* <div>
    <a class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fab fa-facebook-f"></i></a>
    <a class="btn-floating btn-lg btn-tw" type="button" role="button"><i class="fab fa-twitter"></i></a>
    <a class="btn-floating btn-lg btn-li" type="button" role="button"><i class="fab fa-linkedin-in"></i></a>
    <a class="btn-floating btn-lg btn-ins" type="button" role="button"><i class="fab fa-instagram"></i></a>
    <a class="btn-floating btn-lg btn-yt" type="button" role="button"><i class="fab fa-youtube"></i></a>
    <a class="btn-floating btn-lg btn-email" type="button" role="button"><i class="fas fa-envelope"></i></a>
</div> */}
    

        {/* <div class="icon-bar icon-bar-footer">
            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a> 
            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> 
            <a href="#" class="google"><i class="fa fa-google"></i></a> 
            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> 
        </div> */}
    </div>;
}
export default Footer;