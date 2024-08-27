import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Functional Carousel component
const Carousel = ({ items, active }) => {
  const [currentIndex, setCurrentIndex] = useState(active);
  const [direction, setDirection] = useState("");

  const moveLeft = () => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const moveRight = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const generateItems = () => {
    let itemsToShow = [];
    for (let i = currentIndex - 2; i <= currentIndex + 2; i++) {
      let index = (i + items.length) % items.length;
      let level = currentIndex - i;
      itemsToShow.push({ key: index, id: items[index], level });
    }
    return itemsToShow;
  };

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left" />
      </div>
      <TransitionGroup className="carousel-items">
        {generateItems().map((item) => (
          <CSSTransition key={item.key} classNames={direction} timeout={500}>
            <div className={`item level${item.level}`}>{item.id}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="arrow arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right" />
      </div>
    </div>
  );
};

// Main BestPlace functional component
const BestPlace = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <header className="header page__header">
        <h1 className="header__title" style={{ textDecoration: "underline" }}>
          Best places
        </h1>
      </header>
      <Carousel items={items} active={0} />
    </>
  );
};

// Export BestPlace component
export default BestPlace;

// Render the component
// ReactDOM.createRoot(<BestPlace />, document.getElementById('app'));
