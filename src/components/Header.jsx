import React, { useEffect } from "react";

const Header = ({ handleNewGame, wins }) => {
  // Update document title with number of wins
  useEffect(
    () =>
      (document.title = `Memory Game - ${wins} ${wins === 1 ? "Win" : "Wins"}`),
    [wins]
  );

  // Allow user to reset the game
  return (
    <header className="header">
      <h4>{`${wins} ${wins === 1 ? "Win" : "Wins"}!`}</h4>
      <h3>Memory Game</h3>
      <button onClick={handleNewGame}>Reset Game</button>
    </header>
  );
};

export default Header;
