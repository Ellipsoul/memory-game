import React, { useEffect } from "react";

const Header = ({ handleNewGame, wins }) => {
  // Update document title with number of wins
  useEffect(() => (document.title = `Memory Game - ${wins} wins`));

  // Allow user to reset the game
  return (
    <header className="header">
      <h4>{wins} Wins!</h4>
      <h3>Memory Game</h3>
      <button onClick={handleNewGame}>Reset Game</button>
    </header>
  );
};

export default Header;
