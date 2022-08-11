import React from "react";
import "./Menu.css";

const Menu = ({ onClickHandler }) => {
  return (
    <div>
      <button className='btn start-btn' onClick={onClickHandler}>
        Start Game
      </button>
    </div>
  );
};

export default Menu;
