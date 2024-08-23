import React from "react";
import img1 from "/greatleaving/scroll_img1.jpg";
import img2 from "/greatleaving/scroll_img2.jpg";
import img3 from "/greatleaving/scroll_img3.jpg";
import img4 from "/greatleaving/scroll_img4.jpg";
import img5 from "/greatleaving/scroll_img5.jpg";
import img6 from "/greatleaving/scroll_img6.jpg";
import img7 from "/greatleaving/scroll_img7.jpg";

function PopularDestination() {
  return (
    <div className="page">
      <header className="header page__header">
        <h1 className="header__title" style={{ textDecoration: "underline" }}>
          Popular Destination{" "}
        </h1>
      </header>
      <main className="page-main page__main">
        <div className="gallery main__gallery">
          <div className="gallery__col">
            <img className="gallery__img" src={img1} alt="" />
            <img className="gallery__img" src={img3} alt="" />
          </div>

          <div className="gallery__col">
            <img className="gallery__img" src={img4} alt="" />
            <img className="gallery__img" src={img2} alt="" />
          </div>

          <div className="gallery__col">
            <img className="gallery__img" src={img5} alt="" />
            <img className="gallery__img" src={img6} alt="" />
            <img className="gallery__img" src={img7} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PopularDestination;
