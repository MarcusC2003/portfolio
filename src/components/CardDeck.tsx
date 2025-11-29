import React from "react";

// images are in: src/assets/images/home
import handBase from "../assets/images/home/Hand.png";
import thumb from "../assets/images/home/Thumb.png";
import cardPickleball from "../assets/images/home/Card-Pickleball.png";
import cardCooking from "../assets/images/home/Card-Cooking.png";
import cardIndoorPlants from "../assets/images/home/Card-IndoorPlants.png";
import cardVolleyball from "../assets/images/home/Card-Volleyball.png";

const CardDeck: React.FC = () => {
  return (
    <div className="carddeck-wrapper">
      <div className="carddeck-stage">
        {/* cards (back → front) */}
        <img
          src={cardVolleyball}
          alt="Volleyball card"
          className="interest-card card-volleyball"
        />
        <img
          src={cardIndoorPlants}
          alt="Indoor plants card"
          className="interest-card card-indoor"
        />
        <img
          src={cardPickleball}
          alt="Pickleball card"
          className="interest-card card-pickleball"
        />
        <img
          src={cardCooking}
          alt="Cooking card"
          className="interest-card card-cooking"
        />

        {/* hand on top of cards */}
        <img src={handBase} alt="Hand" className="hand-base" />
        <img src={thumb} alt="Thumb" className="hand-thumb" />
      </div>
    </div>
  );
};

export default CardDeck;
