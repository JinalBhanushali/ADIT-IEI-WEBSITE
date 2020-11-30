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
    if(window.innerWidth < 960){
      setDropdown(false);
    }else{
      setDropdown(true);
      setPhoneDropdown(false);
    }
  };
  const onMouseLeave = () => {
    if(window.innerWidth < 960){
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
      <nav className="navbar">
        <div onClick={handleClick} className="menu-icon">
          <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
        <img src={logo} alt="logo" className="navbar-logo"/>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         
          <li className="nav-item">
            <Link to="/" onClick={closeClick} className="nav-links">Home</Link>
          </li>
          <li className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
          >
            <Link to="/event/presentEvent" onClick={window.innerWidth > 960 ? closeClick : phonedropdownOpen} className="nav-links"> Event <i className="fa fa-caret-down"></i></Link>
            { dropdown && <Dropdown></Dropdown>
              
            }
           
          </li>
          <li> {phonedropdown && (
              (
                <div className="">
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
          )}</li>
          <li className="nav-item">
            <Link to="/gallery" onClick={closeClick} className="nav-links">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/ieiMembership" onClick={closeClick} className="nav-links">Members</Link>
          </li>
           <li className="nav-item">
            <Link to="/history" onClick={closeClick} className="nav-links">History</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={closeClick} className="nav-links">Contact</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/event/presentEvent" component={presentEvent}></Route>
        <Route path="/event/pastEvent" component={pastEvent}></Route>
        <Route path="/event/upcomingEvent" component={futureEvent}></Route>
        <Route path="/gallery" component={Gallery}></Route>
        <Route path="/ieiMembership" component={IEIMembership}></Route>
        <Route path="/history" component={History}></Route>
        <Route path="/contact" component={Contect}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
}
const PhoneMenuItems = [
    {
        title : 'UpcomingEvent',
        path : '/event/upcomingEvent',
        cName : 'Phonedropdown-li-link'
    },
    {
        title : 'PresentEvent',
        path : '/event/presentEvent',
        cName : 'Phonedropdown-li-link'
    },
    {
        title : 'PastEvent',
        path : '/event/pastEvent',
        cName : 'Phonedropdown-li-link'
    }
]
const main=<BrowserRouter><Main></Main></BrowserRouter>
ReactDOM.render(main,document.getElementById("root"));
 
