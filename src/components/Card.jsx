import React from "react";

// Individual card component
const Card = ({ image, selected, onClick }) => {
  return (
    <div className="card">
      {/* Apply animation when card is selected */}
      <div className={selected && "selected"}>
        {/* Either the image or card back will be shown */}
        <img alt="" src={image} className="card-face" />
        <img
          alt=""
          className="card-back"
          src={"/assets/fireship.png"}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
