import React, {component, useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from "react-tooltip";
import Footer from './footer';
import arrow from '../img/right-arrow.png';
import event2 from "../img/event2.jpg";
function presentEvent() {
    return(
   <div id="main-section">
    <div className="set-event">
    <ul class="timeline" id="timelinelist">
        <li>
          <div class="direction-l " data-tip data-for="registerTip1">
              <div class="flag-wrapper ">
                  <div className="tagbox">
                    <span className="flag">
                        present event 1
                    </span>
                    <div>
                        <span className="time-wrapper"><span className="time">29-31 Mar '19</span></span>
                    </div>
                  </div>  
              </div>
           </div>
           <ReactTooltip id="registerTip1" place="bottom" effect="float"  className="box  " >
                   
                        <div className="box-heading">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Machine Learning
                        </div>
                          <div className=""> 
                              
                              <div className="box-image">
                                  <img src={event2} alt="img1"  className="box-image-img"/>
                              </div>
                              <div className="box-text">
                              
                                  <p><i className="fa fa-quote-left" aria-hidden="true"></i> Make it work, make it right, make it fast"  The entire family of IEI Student Chapter,
                                    A.D. Patel Institute of Technology, CVM University feels highly ecstatic as it brings 
                                you an enlightening webinar on Competitive Programming We are tremendously elated as we 
                                introduce Mr. Harsh Bardhan Mishra. he is an MLH Fellow and a Technical Content Reviewer  
                                 Intern at GeeksforGeeks.Moreover he has also been a part of Microsoft Learn student ambassador
                                 and student partner programs. <i class="fa fa-quote-right" aria-hidden="true"></i></p>
                                  <p>
                                  <img src={arrow} alt="" className="arrow-icon"/>
                                  &nbsp; Date : 24th October 2020 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img src={arrow} alt="" className="arrow-icon"/>
                                   &nbsp;&nbsp; Topic: Competitive Programming</p>
                                  <p>
                                    <img src={arrow} alt="" className="arrow-icon"/>
                                    &nbsp;&nbsp; Webinar Platform : Google Meet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                     <img src={arrow} alt="" className="arrow-icon"/>
                                     &nbsp;&nbsp; Registration Link :  <a className="box-text" href="http://bit.ly/competitive-programming_iei">http://bit.ly/competitive-programming_iei</a> 
                                  </p>
                             </div>
                        </div> 
                  
                </ReactTooltip>
        </li>
        <li className="">
          <div class="direction-r" data-tip data-for="registerTip2">
            <div class="flag-wrapper ">
                <div  className="tagbox ">
                    <span class="flag">
                       present event 2
                    </span>
                    <div><span class="time-wrapper"><span class="time">29-31 Mar '19</span></span></div>
                </div>
            </div>
            
          </div>
              <ReactTooltip id="registerTip2" place="bottom" effect="float" className=" box">
                
                        <div className="box-heading">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Competitive Programming
                        </div>
                        <div  className="">
                            <div className="box-image">
                              <img src={event2} alt="img1"  className="box-image-img"/>
                            </div>
                            <div className="box-text">
                                <p>  "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge." The entire family of brings to you an 
                                 enormously informative workshop on "Development cycle   IEI Student Chapter, A.D. Patel Institute of Technology, CVM University 
                               feels highly rhapsodic as it of Machine  brings to you an enormously informative workshop on "Development cycle Learning Project." We are tremendously ecstatic as we introduce  Mr. Krish Naik
                             as the speaker for this event. He is currently serving as the Lead Data  Scientist at iNeuron Academy and Panasonic Indian Innovation Center. Moreover, 
                               he has also been part of HCL Technologies as a Software Engineer. Apart from all this, he also runs a Youtube Channel, "Krish Naik" with over 237k+ subscribers.</p>
                                <p><img src={arrow} alt="" className="arrow-icon"/>&nbsp; Date: 29th September 2020  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={arrow} alt="" className="arrow-icon"/>&nbsp;&nbsp; Time: 10:00 AM IST</p>
                              <p><img src={arrow} alt="" className="arrow-icon"/>&nbsp; Session length: 2 hours &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={arrow} alt="" className="arrow-icon"/>&nbsp;&nbsp; Platform: Google Meet</p>
                                <p><img src={arrow} alt="" className="arrow-icon"/>&nbsp; Registration Link: <a href="https://forms.gle/xBKykbxCqgumSxsL6">https://forms.gle/xBKykbxCqgumSxsL6</a> </p>
                            </div>
                        </div>
                        
            </ReactTooltip>
        </li>
        <li>
          <div class="direction-l " data-tip data-for="registerTip3">
            <div class="flag-wrapper ">
              
                <div  className="tagbox">
                  <span className="flag">
                      present event 3
                  </span>
                  <div>
                      <span className="time-wrapper"><span className="time">29-31 Mar '19</span></span>
                  </div>
                </div>
              
              
            </div>
                
           </div>
           <ReactTooltip id="registerTip3" place="bottom" effect="float"  className="box  " >
                  
                        <div className="box-heading">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Machine Learning
                        </div>
                          <div className=""> 
                              
                              <div className="box-image">
                                  <img src={event2} alt="img1"  className="box-image-img"/>
                              </div>
                              <div className="box-text">
                              
                              <p><i className="fa fa-quote-left" aria-hidden="true"></i> Make it work, make it right, make it fast"  The entire family of IEI Student Chapter,
                                A.D. Patel Institute of Technology, CVM University feels highly ecstatic as it brings 
                            you an enlightening webinar on Competitive Programming We are tremendously elated as we 
                            introduce Mr. Harsh Bardhan Mishra. he is an MLH Fellow and a Technical Content Reviewer  
                             Intern at GeeksforGeeks.Moreover he has also been a part of Microsoft Learn student ambassador
                             and student partner programs. <i class="fa fa-quote-right" aria-hidden="true"></i></p>
                              <p>
                              <img src={arrow} alt="" className="arrow-icon"/>
                              &nbsp; Date : 24th October 2020 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <img src={arrow} alt="" className="arrow-icon"/>
                               &nbsp;&nbsp; Topic: Competitive Programming</p>
                              <p>
                                <img src={arrow} alt="" className="arrow-icon"/>
                                &nbsp;&nbsp; Webinar Platform : Google Meet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                 <img src={arrow} alt="" className="arrow-icon"/>
                                 &nbsp;&nbsp; Registration Link :  <a className="box-text" href="http://bit.ly/competitive-programming_iei">http://bit.ly/competitive-programming_iei</a> 
                              </p>
                         </div>
                        </div> 
                 
                </ReactTooltip>
        </li>
        <li className="">
          <div class="direction-r" data-tip data-for="registerTip4">
            <div class="flag-wrapper ">
                <div  className="tagbox">
                    <span class="flag">
                       present event 4
                    </span>
                    <div><span class="time-wrapper"><span class="time">29-31 Mar '19</span></span></div>
                </div>
            </div>
            
          </div>
              <ReactTooltip id="registerTip4" place="bottom" effect="float" className=" box">
             
                        <div className="box-heading">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Competitive Programming
                        </div>
                        <div  className="">
                            <div className="box-image">
                              <img src={event2} alt="img1"  className="box-image-img"/>
                            </div>
                            <div className="box-text">
                                <p>  "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge." The entire family of brings to you an 
                                 enormously informative workshop on "Development cycle   IEI Student Chapter, A.D. Patel Institute of Technology, CVM University 
                               feels highly rhapsodic as it of Machine  brings to you an enormously informative workshop on "Development cycle Learning Project." We are tremendously ecstatic as we introduce  Mr. Krish Naik
                             as the speaker for this event. He is currently serving as the Lead Data  Scientist at iNeuron Academy and Panasonic Indian Innovation Center. Moreover, 
                               he has also been part of HCL Technologies as a Software Engineer. Apart from all this, he also runs a Youtube Channel, "Krish Naik" with over 237k+ subscribers.</p>
                                <p><img src={arrow} alt="" className="arrow-icon"/>&nbsp; Date: 29th September 2020  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={arrow} alt="" className="arrow-icon"/>&nbsp;&nbsp; Time: 10:00 AM IST</p>
                              <p><img src={arrow} alt="" className="arrow-icon"/>&nbsp; Session length: 2 hours &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={arrow} alt="" className="arrow-icon"/>&nbsp;&nbsp; Platform: Google Meet</p>
                                <p><img src={arrow} alt="" className="arrow-icon"/>&nbsp; Registration Link: <a href="https://forms.gle/xBKykbxCqgumSxsL6">https://forms.gle/xBKykbxCqgumSxsL6</a> </p>
                            </div>
                        </div>
                       
            </ReactTooltip>
        </li>
        <li>
          <div class="direction-l " data-tip data-for="registerTip5">
            <div class="flag-wrapper ">
              
                <div  className="tagbox">
                  <span className="flag">
                      present event 5
                  </span>
                  <div>
                      <span className="time-wrapper"><span className="time">29-31 Mar '19</span></span>
                  </div>
                </div>
              
              
            </div>
                
           </div>
           <ReactTooltip id="registerTip5" place="bottom" effect="float"  className="box  " >
                   
                        <div className="box-heading">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Machine Learning
                        </div>
                          <div className=""> 
                              
                              <div className="box-image">
                                  <img src={event2} alt="img1"  className="box-image-img"/>
                              </div>
                              <div className="box-text">
                              
                                  <p><i className="fa fa-quote-left" aria-hidden="true"></i> Make it work, make it right, make it fast"  The entire family of IEI Student Chapter,
                                    A.D. Patel Institute of Technology, CVM University feels highly ecstatic as it brings 
                                you an enlightening webinar on Competitive Programming We are tremendously elated as we 
                                introduce Mr. Harsh Bardhan Mishra. he is an MLH Fellow and a Technical Content Reviewer  
                                 Intern at GeeksforGeeks.Moreover he has also been a part of Microsoft Learn student ambassador
                                 and student partner programs. <i class="fa fa-quote-right" aria-hidden="true"></i></p>
                                  <p>
                                  <img src={arrow} alt="" className="arrow-icon"/>
                                  &nbsp; Date : 24th October 2020 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img src={arrow} alt="" className="arrow-icon"/>
                                   &nbsp;&nbsp; Topic: Competitive Programming</p>
                                  <p>
                                    <img src={arrow} alt="" className="arrow-icon"/>
                                    &nbsp;&nbsp; Webinar Platform : Google Meet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                     <img src={arrow} alt="" className="arrow-icon"/>
                                     &nbsp;&nbsp; Registration Link :  <a className="box-text" href="http://bit.ly/competitive-programming_iei">http://bit.ly/competitive-programming_iei</a> 
                                  </p>
                             </div>
                        </div> 
           
                </ReactTooltip>
        </li>
        <li className="">
          <div class="direction-r" data-tip data-for="registerTip6">
            <div class="flag-wrapper ">
                <div  className="tagbox">
                    <span class="flag">
                       present event 6
                    </span>
                    <div><span class="time-wrapper"><span class="time">29-31 Mar '19</span></span></div>
                </div>
            </div>
            
          </div>
              <ReactTooltip id="registerTip6" place="bottom" effect="float" className=" box">
                 
                        <div className="box-heading">
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Competitive Programming
                        </div>
                        <div  className="">
                            <div className="box-image">
                              <img src={event2} alt="img1"  className="box-image-img"/>
                            </div>
                            <div className="box-text">
                                <p>  "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge." The entire family of brings to you an 
                                 enormously informative workshop on "Development cycle   IEI Student Chapter, A.D. Patel Institute of Technology, CVM University 
                               feels highly rhapsodic as it of Machine  brings to you an enormously informative workshop on "Development cycle Learning Project." We are tremendously ecstatic as we introduce  Mr. Krish Naik
                             as the speaker for this event. He is currently serving as the Lead Data  Scientist at iNeuron Academy and Panasonic Indian Innovation Center. Moreover, 
                               he has also been part of HCL Technologies as a Software Engineer. Apart from all this, he also runs a Youtube Channel, "Krish Naik" with over 237k+ subscribers.</p>
                                <p><img src={arrow} alt="" className="arrow-icon"/>&nbsp; Date: 29th September 2020  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={arrow} alt="" className="arrow-icon"/>&nbsp;&nbsp; Time: 10:00 AM IST</p>
                              <p><img src={arrow} alt="" className="arrow-icon"/>&nbsp; Session length: 2 hours &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={arrow} alt="" className="arrow-icon"/>&nbsp;&nbsp; Platform: Google Meet</p>
                                <p><img src={arrow} alt="" className="arrow-icon"/>&nbsp; Registration Link: <a href="https://forms.gle/xBKykbxCqgumSxsL6">https://forms.gle/xBKykbxCqgumSxsL6</a> </p>
                            </div>
                        </div>
                         
            </ReactTooltip>
        </li>
      </ul>
    </div>
      {/* <!-- Footer Section  --> */}

    <Footer></Footer>
   </div>);
}
export default presentEvent;