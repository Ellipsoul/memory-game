import React, { useState, useEffect } from "react";
import "./App.css";

import shuffle from "./utilities/shuffle";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [cards, setCards] = useState(shuffle); // Shuffled list of cards

  const [pickOne, setPickOne] = useState(null); // First card choice
  const [pickTwo, setPickTwo] = useState(null); // Second card choice
  const [disabled, setDisabled] = useState(false); // Delay handler

  const [wins, setWins] = useState(0); // Track number of wins

  // Select a card
  const handleClick = (card) => {
    if (disabled) return;
    pickOne ? setPickTwo(card) : setPickOne(card);
  };

  // A turn is 2 picks
  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };

  // Handle a potential match
  useEffect(() => {
    let pickTimer; // Timer for delay
    if (!pickOne || !pickTwo) return; // 2 cards haven't been picked yet
    // User picked 2 matching cards
    if (pickOne.image === pickTwo.image) {
      // Set the matched cards' matched state to true
      setCards((prevCards) => {
        return prevCards.map((card) => {
          card.image === pickOne.image ? { ...card, matched: true } : card;
        });
      });
      handleTurn();
    } else {
      // Cards do not match
      setDisabled(true);
      pickTimer = setTimeout(() => {
        handleTurn();
      }, 1000);
    }
    // Remove timer when component is unmounted
    return () => clearTimeout(pickTimer);
  }, [cards, pickOne, pickTwo]);

  // Handle a win (all cards are matched)
  useEffect(() => {
    // See if there are no more unmatched cards
    const checkWin = cards.filter((card) => !card.matched);
    if (cards.length && checkWin.length === 0) {
      setWins(wins + 1);
      handleTurn();
      setCards(shuffle);
    }
  }, [cards, wins]);

  // Reset the game
  const handleNewGame = () => {
    setWins(0);
    handleTurn();
    setCards(shuffle);
  };

  // Simple grid of 4 by 4 cards with a header
  return (
    <>
      <Header wins={wins} handleNewGame={handleNewGame} />
      <div className="grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            selected={card === pickOne || card === pickTwo || card.matched}
            onClick={() => handleClick(card)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
