import React, { useState } from "react";
import "./App.css";

import shuffle from "./utilities/shuffle";
import Card from "./components/Card";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCards] = useState(shuffle);

  // Simple grid of 4 by 4 cards
  return (
    <div className="grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          selected={false}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}

export default App;
