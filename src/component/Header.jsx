import React from "react";
import logo from "/tkt-logo.gif";
import { IoMdCall } from "react-icons/io";
import Header_nav from "./Header_nav";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 col-xs-5 marTpLogo log">
            <a
              role="button"
              aria-label="airtkt website,opens in a new tab"
              href=""
              target="_blank"
            >
              <img role="img" alt="airtkt website icon" src={logo} />
            </a>
          </div>
          <div className="col-8 col-xs-12 sa-tpbLink hidden-xs" id="tpLink">
            <div className="text-right">
              <p>
                <span className="book-online-txt">
                  Book Online or Call 24x7x365
                </span>
                &nbsp;
                <strong className="sa-ptxtsz">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a
                    role="button"
                    aria-label="call 1-213-225-9867"
                    href="tel:1-213-225-9867"
                  >
                    1-213-225-9867
                  </a>
                </strong>
              </p>
              <div className="lockdown pull-right" style={{ display: "none" }}>
                We are
                <strong>unable to accept</strong> phone calls due to lockdown
                <a role="button" aria-label="support request" href="">
                  <u> please email your request.</u>
                </a>
              </div>
            </div>
          </div>

          <div className="col-8 sa-call-blk visible-xs">
            <div className="sa-24-blk">
              <a
                role="button"
                aria-label="call +1213-955-9695"
                href="tel:+1213-955-9695"
              >
                <i className="fa fa-phone sa-phn-ico" aria-hidden="true"></i>
                <span className="sa-call-txt">
                  Call 24x7<span className="sa-365">x365</span>
                </span>
              </a>
              <div className="sa-free-mob">It's Free!</div>
            </div>
            <div className="hambrg" role="button" aria-label="Open Navigation">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <Header_nav />
    </>
  );
};

export default Header;
