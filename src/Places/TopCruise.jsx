import React from "react";
import img1 from "/topcruise/celebrity.jpg";
import img2 from "/topcruise/norwegian_img5.jpg";
import img3 from "/topcruise/viking.jpg";
import img4 from "/topcruise/princess.jpg";

const TopCruise = () => {
  return (
    <div className="">
      <header className="header page__header">
        <h1 className="header__title" style={{ textDecoration: "underline" }}>
          Top Cruise Line
        </h1>
      </header>
      <div className="grid-container">
        <div className="grid-container1">
          <div className="grid-item item1">
            <img src={img1} alt="" />
          </div>
          <div className="grid-item item2">
            <img src={img2} alt="" />
          </div>
          <div className="grid-item item3">
            <img src={img3} alt="" />
          </div>
          <div className="grid-item item4">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCruise;
