import React from "react";


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
            <p>CELEBRITY APEX</p>
          </div>
          <div className="grid-item item2">
            <p>NORWEGIAN AQUA</p>
          </div>
          <div className="grid-item item3">
            <p>Viking</p>
          </div>
          <div className="grid-item item4">
            <p>SKY PRINCESS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCruise;
