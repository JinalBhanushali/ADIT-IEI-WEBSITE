import React, {component, useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, useFormik, Link, Route, Switch ,NavLink, Redirect, Prompt} from 'react-router-dom';
import event from '../img/event.jpg';



function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <div
        onClick={handleClick}
        className={click ? 'dropdownSet clicked' : 'dropdownSet d-flex'}
      >
       <img src={event} alt="event" className="imgEvent"/>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    </div>
  );
}



const MenuItems = [
    {
        title : 'UpcomingEvent',
        path : '/event/upcomingEvent',
        cName : 'dropdown-link'
    },
    {
        title : 'PresentEvent',
        path : '/event/presentEvent',
        cName : 'dropdown-link'
    },
    {
        title : 'PastEvent',
        path : '/event/pastEvent',
        cName : 'dropdown-link'
    }
]


export default Dropdown ;