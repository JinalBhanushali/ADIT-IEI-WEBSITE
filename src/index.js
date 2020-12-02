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
  const [phonedropdown, setPhoneDropdown]=useState(false);
  const [clickbtn, setClickbtn] = useState(false);
  const handleClickbtn = () => {
      setClick(false);
  }
  const handleClick = ()=>  setClick(!click);
  const closeClick = ()=>  setClick(false);
  const onMouseEnter = () => {
    if(window.innerWidth < 1200){
      setDropdown(false);
      setPhoneDropdown(false);
    }else{
      setDropdown(true);
      setPhoneDropdown(false);
    }
  };
  const onMouseLeave = () => {
    if(window.innerWidth < 1200){
      setDropdown(false);
    }else{
      setDropdown(false);
      setPhoneDropdown(false);
    }
  };
  const phonedropdownOpen = () =>{
    setPhoneDropdown(!phonedropdown);
   }
  
  return <div className="main">

      <div className="">
      <nav className="navbar navbar-expand-xl navbars">
        <div onClick={handleClick} className="menu-icon">
          <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
        <Link to="/ADIT-IEI-WEBSITE" onClick={closeClick} className="nav-link"><img src={logo} alt="logo" className="navbar-logo d-inline-block"/></Link>
        <ul className={click ? 'nav-menus active navbar-nav mr-auto container' : 'nav-menus navbar-nav mr-auto container'}>
          <li className="nav-item active nav-items">
            <Link to="/ADIT-IEI-WEBSITE" onClick={closeClick} className="nav-link nav-links">Home</Link>
          </li>
          <li className="nav-item  nav-items"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
          >
            <Link to="/ADIT-IEI-WEBSITE/event/presentEvent" onClick={window.innerWidth > 1200 ? closeClick : phonedropdownOpen} className="nav-link nav-links" for="si"> 
               Event &nbsp;
               <i className="fa fa-caret-down"></i>
            </Link>
            { dropdown && <Dropdown id="si"></Dropdown> }
          </li>
           {phonedropdown && (
              (
                <div>
                  <ul
                    onClick={handleClickbtn}
                    className={clickbtn ? 'Phonedropdown clicked' : 'Phonedropdown'}
                  >
                    {PhoneMenuItems.map((item, index) => {
                      return (
                        <li key={index} className="Phonedropdown-li">
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
              ) 
          )}
          <li className="nav-item nav-items">
            <Link to="/ADIT-IEI-WEBSITE/gallery" onClick={closeClick} className="nav-link nav-links">Gallery</Link>
          </li>
          <li className="nav-item nav-items">
            <Link to="/ADIT-IEI-WEBSITE/ieiMembership" onClick={closeClick} className="nav-link nav-links">Member</Link>
          </li>
           <li className="nav-item nav-items">
            <Link to="/ADIT-IEI-WEBSITE/history" onClick={closeClick} className="nav-link nav-links">about us</Link>
          </li>
          <li className="nav-item nav-items">
            <Link to="/ADIT-IEI-WEBSITE/contact" onClick={closeClick} className="nav-link nav-links">Core Team</Link>
          </li>
        </ul>
      </nav>
    </div>
      <Switch>
        <Route exact path="/ADIT-IEI-WEBSITE" component={Home}></Route>
        <Route path="/ADIT-IEI-WEBSITE/event/presentEvent" component={presentEvent}></Route>
        <Route path="/ADIT-IEI-WEBSITE/event/pastEvent" component={pastEvent}></Route>
        <Route path="/ADIT-IEI-WEBSITE/event/upcomingEvent" component={futureEvent}></Route>
        <Route path="/ADIT-IEI-WEBSITE/gallery" component={Gallery}></Route>
        <Route path="/ADIT-IEI-WEBSITE/ieiMembership" component={IEIMembership}></Route>
        <Route path="/ADIT-IEI-WEBSITE/history" component={History}></Route>
        <Route path="/ADIT-IEI-WEBSITE/contact" component={Contect}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
}
const PhoneMenuItems = [
    {
        title : 'Upcoming Event',
        path : '/event/upcomingEvent',
        cName : 'Phonedropdown-li-link'
    },
    {
        title : 'Present Event',
        path : '/event/presentEvent',
        cName : 'Phonedropdown-li-link'
    },
    {
        title : 'Past Event',
        path : '/event/pastEvent',
        cName : 'Phonedropdown-li-link'
    }
]
const main=<BrowserRouter><Main></Main></BrowserRouter>
ReactDOM.render(main,document.getElementById("root"));
 
