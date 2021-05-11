import { render } from '@testing-library/react';
import React, {component, useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import Footer from './footer';
import Dropdown from './dropdown';
import join from '../img/join.gif';
import happy from '../img/happy.gif';

function Home () {
  const [btn, setbtn] = useState(false);
  const [iconClick, seticonClick] = useState(false);
  function handleClick(e){
    setbtn(!btn);
  }

  function OpenIcon() {
    seticonClick(!iconClick);
  }
  return (
      <div id="main-section ">
        <div> {
          btn && (
            <div className="form" id="google-form">
              
              <button onClick={handleClick} className=" form-close"><div className="form-close-btn"></div></button>
             
              <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLScLYIdAIA9clQiAvjZun9e0DcbmJbIiJ5tc4hJN1JRsgsraSQ/viewform"
                  id="myId"
                  className="form-link"
                  display="initial"
                  position="relative"
                  allowFullScreen/>
                  
              {/* <a href="https://giphy.com/gifs/joinhoney-celebrate-coin-coiny-LmCWl3QSKg8kISq31c/tile"></a> */}
              <div>dcdjchdbhbhbhd</div>
              {/* <a  href=""><img src={happy} alt="happy" className="happy-1 happy" /> </a>
              <a  href=""><img src={happy} alt="happy" className="happy-2 happy" /> </a> */}
            </div>
          )
        }
        </div> 
        <div className="icon position-fixed d-flex">
              <div onClick={OpenIcon} className="position-fixed">
               <i className={iconClick ? "fa fa-close icon-set" : "fa fa-home icon-set"}></i>
              </div>
               <div className={iconClick ? "social active d-flex social-icon" : "social d-flex social-icon"}>
                 <a href="#" className="facebook "><i class="fa fa-facebook "></i></a>
                 <a href="#" className="twitter" ><i class="fa fa-twitter"></i></a>
                 <a href="#" className="google "><i class="fa fa-google"></i></a>
                 <a href="#" className="linkedin "><i class="fa fa-linkedin"></i></a>
                 <a href="#" className="youtube "><i class="fa fa-youtube"></i></a>
               </div>
        </div>
      <div className="">
         <p>  
          Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
       
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
       =
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      
        <a onClick={handleClick } href="#google-form"><img src={join} alt="join" className="join-img" /> </a>
        
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
        
        <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
       
        </div>
        </div>
        <Footer></Footer>
      </div>
  );
}

  
export default Home;
