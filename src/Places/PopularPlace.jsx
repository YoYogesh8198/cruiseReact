import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";

const PopularPlace = () => {
  const images = [
    "./popular/1.jpg",
    "./popular/2.jpg",
    "./popular/3.jpg",
    "./popular/4.jpg",
    "./popular/5.jpg",
    "./popular/6.jpg",
    "./popular/7.jpg",
    "./popular/8.jpg",
    "./popular/9.jpg",
    "./popular/10.jpg",
  ];

  return (
    <>
      <header className="header page__header">
        <h1 className="header__title" style={{ textDecoration: "underline" }}>
          Top Cruises Places
        </h1>
      </header>
      <section id="slideshow">
        <div className="entire-content">
          <div className="content-carrousel">
            <figure className="shadow">
              <img src={`${images[0]}`} />
            </figure>
            <figure className="shadow">
              <img src={`${images[1]}`} />
            </figure>
            <figure className="shadow">
              <img src={`${images[2]}`} />
            </figure>
            <figure className="shadow">
              <img src={`${images[3]}`} />
            </figure>
            <figure className="shadow">
              <img src={`${images[4]}`} />
            </figure>
            <figure className="shadow">
              <img src={`${images[5]}`} />
            </figure>
            <figure className="shadow">
              <img src={`${images[6]}`} />
            </figure>
            <figure className="shadow">
              <img src={`${images[7]}`} />
            </figure>
            <figure className="shadow">
              <img src={`${images[8]}`} />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularPlace;
