import React from "react";

const Header_nav = () => {
  return (
    <div className="container">
      <div id="mySidenav" className="dropdowns sidenav stroke">
        <a role="button" aria-label="close" className="closebtn visible-xs">
          ×
        </a>
        <ul role="menu" className="navTp">
          <li>
            <a role="button" aria-label="Flights" href="">
              Flights
            </a>
          </li>
          <li>
            <a role="button" aria-label="Cruise" className="active" href="#">
              Cruise
            </a>
          </li>
          <li>
            <a role="button" aria-label="Hotels" href="">
              Hotels
            </a>
          </li>
          <li>
            <a role="button" aria-label="Cars" href="">
              Cars
            </a>
          </li>
          <li>
            <a role="button" aria-label="Last Minute" href="">
              Last Minute
            </a>
          </li>
          <li>
            <a
              role="button"
              aria-label="Insurance,opens in a new tab"
              href=""
              target="_blank"
            >
              Insurance
            </a>
          </li>
          <li>
            <a role="button" aria-label="AirTkt Guide" href="" className="lt">
              AirTkt Guide
            </a>
          </li>

          <li>
            <a role="button" aria-label="Contact Us" href="">
              Contact Us
            </a>
          </li>

          <li className="last">
            <a role="button" aria-label="My World" href="">
              My World
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header_nav;
