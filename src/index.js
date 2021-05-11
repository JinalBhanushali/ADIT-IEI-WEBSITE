import React, {component, useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, useFormik, Link, Route, Switch ,NavLink, Redirect, Prompt} from 'react-router-dom';
import Home from './main/home';
import futureEvent from './main/futureEvent';
import pastEvent from './main/pastEvent';
import presentEvent from './main/presentEvent';
import Gallery from './main/gallery';
import Contect from './main/contact';
import History from './main/history';
import IEIMembership from './main/ieiMembership';
import NotFound from './main/pagenotfound';
import logo from './img/iei_logo.png';
import event from './main/event';
import Footer from './main/footer';
import Dropdown from './main/dropdown';

function Main() {
  const [click, setClick]=useState(false);
  const [dropdown, setDropdown]=useState(false);
  const [phoneDropDown, setPhoneDropDown]=useState(false);
  const [clickbtn, setClickbtn] = useState(false);
  const handleClickbtn = () => {
      setClick(false);
  }
  const handleClick = ()=>  setClick(!click);
  const closeClick = ()=>  setClick(false);
  const dropdownClick = () => {
    if(window.innerWidth < 767.98){
      setDropdown(false);
     // setPhoneDropDown(false);
    }else{
      setDropdown(true);
      //setPhoneDropDown(false);
    }
  }
  const onMouseEnter = () => {
    if(window.innerWidth < 767.98){
      setDropdown(false);
     // setPhoneDropDown(false);
    }else{
      setDropdown(true);
     // setPhoneDropDown(false);
    }
  };
  const onMouseLeave = () => {
    if(window.innerWidth < 767.98){
      setDropdown(false);
    }else{
      setDropdown(false);
     // setPhoneDropDown(false);
    }
  };
 
  const clickedevent = () => {
    setPhoneDropDown(!phoneDropDown);
  }
  
  return <div className="main">

      <div className="navbarset">
      <nav className="navbar navbar-expand-md navbars">
        <div onClick={handleClick} className="menu-icon">
          <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
        <Link to="ADIT-IEI" onClick={closeClick} className="nav-link"><img src={logo} alt="logo" className="navbar-logo d-inline-block"/></Link>
        <ul className={click ? 'nav-menus active navbar-nav mr-auto container' : 'nav-menus navbar-nav mr-auto container'}>
          <li className="nav-item active nav-items menu-top">
            <Link to="ADIT-IEI" onClick={closeClick} className="nav-link nav-links text-light">Home</Link>
          </li>
          <li className="nav-item  nav-items"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={dropdownClick}
          >
            <Link to="/ADIT-IEI/event/presentEvent" onClick={window.innerWidth > 767.98 ? closeClick : clickedevent} className="nav-link nav-links text-light" > 
               Event &nbsp;
               <i className={phoneDropDown || dropdown ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
            </Link>
            { dropdown && <Dropdown></Dropdown> }
          </li>
           {phoneDropDown && (
              
                <div>
                  <ul
                    onClick={handleClickbtn}
                    className={clickbtn ? 'Phonedropdown clicked' : 'Phonedropdown'}
                  >
                    {PhoneMenuItems.map((item, index) => {
                      return (
                        <li key={index} className="Phonedropdown-li  ">
                          <Link
                            className={item.cName}
                            to={item.path}
                            onClick={() => setClickbtn(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
               
          )}
          <li className="nav-item nav-items">
            <Link to="/ADIT-IEI/gallery" onClick={closeClick} className="nav-link nav-links  text-light">Gallery</Link>
          </li>
          <li className="nav-item nav-items">
            <Link to="/ADIT-IEI/ieiMembership" onClick={closeClick} className="nav-link nav-links text-light">Member</Link>
          </li>
           <li className="nav-item nav-items">
            <Link to="/ADIT-IEI/history" onClick={closeClick} className="nav-link nav-links text-light">about us</Link>
          </li>
          <li className="nav-item nav-items menu-bottom">
            <Link to="/ADIT-IEI/contact" onClick={closeClick} className="nav-link nav-links text-light">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* <!--Facebook--> */}

    </div>
{/* <div class="icon-bar">
  <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
  <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
  <a href="#" class="google"><i class="fa fa-google"></i></a>
  <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
  <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
</div> */}
      <Switch>
        <Route exact path="ADIT-IEI" component={Home}></Route>
        <Route path="/ADIT-IEI/event/presentEvent" component={presentEvent}></Route>
        <Route path="/ADIT-IEI/event/pastEvent" component={pastEvent}></Route>
        <Route path="/ADIT-IEI/event/upcomingEvent" component={futureEvent}></Route>
        <Route path="/ADIT-IEI/gallery" component={Gallery}></Route>
        <Route path="/ADIT-IEI/ieiMembership" component={IEIMembership}></Route>
        <Route path="/ADIT-IEI/history" component={History}></Route>
        <Route path="/ADIT-IEI/contact" component={Contect}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
}
const PhoneMenuItems = [
    {
        title : 'Upcoming Event',
        path : '/ADIT-IEI/event/upcomingEvent',
        cName : 'Phonedropdown-li-link'
    },
    {
        title : 'Present Event',
        path : '/ADIT-IEI/event/presentEvent',
        cName : 'Phonedropdown-li-link'
    },
    {
        title : 'Past Event',
        path : '/ADIT-IEI/event/pastEvent',
        cName : 'Phonedropdown-li-link'
    }
]
const main=<BrowserRouter><Main></Main></BrowserRouter>
ReactDOM.render(main,document.getElementById("root"));
 
