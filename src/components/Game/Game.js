import React from "react";
import Menu from "../Menu/Menu";
import { useGameOver } from "../../hooks/useGameOver.js";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const startGame = () => {
    resetGameOver();
    console.log(gameOver);
  };
  return (
    <div>
      <Menu onClickHandler={startGame} />
    </div>
  );
};

export default Game;
