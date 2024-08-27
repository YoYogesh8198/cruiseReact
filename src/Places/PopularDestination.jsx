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
    <div className="page img-area">
      <header className="header page__header">
        <h1 className="header__title" style={{ textDecoration: "underline" }}>
          Popular Destination{" "}
        </h1>
      </header>
      <main className="page-main page__main">
        <div className="gallery main__gallery">
          <div className="gallery__col">
            <div className="single-img">
              <img className="gallery__img" src={img1} alt="" />
              <div className="img-overlay">
                <div className="text">
                  Oia <br />
                  <span>City in Greece</span>
                </div>
              </div>
            </div>
            <div className="single-img">
              <img className="gallery__img" src={img3} alt="" />
              <div className="img-overlay">
                <div className="text">
                  Norwegian Aqua <br />
                  <span>Cruise Ship</span>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery__col">
            <div className="single-img">
              <img className="gallery__img" src={img4} alt="" />
              <div className="img-overlay">
                <div className="text">
                  Celebrity Apex
                  <br />
                  <span>Edge-className cruise ship</span>
                </div>
              </div>
            </div>

            <div className="single-img">
              <img className="gallery__img" src={img2} alt="" />
              <div className="img-overlay">
                <div className="text">
                  Oaxaca
                  <br />
                  <span>City in Mexico</span>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery__col">
            <div className="single-img">
              <img className="gallery__img" src={img5} alt="" />
              <div className="img-overlay">
                <div className="text">
                  Disney Fantasy
                  <br />
                  <span>Cruise Ship</span>
                </div>
              </div>
            </div>

            <div className="single-img">
              <img className="gallery__img" src={img6} alt="" />
              <div className="img-overlay">
                <div className="text">
                  Sky Princess <br />
                  <span>Royal-className cruise ship</span>
                </div>
              </div>
            </div>

            <div className="single-img">
              <img className="gallery__img" src={img7} alt="" />
              <div className="img-overlay">
                <div className="text">
                  Princess
                  <br />
                  <span>Cruise Ship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PopularDestination;
