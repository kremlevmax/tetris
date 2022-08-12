export const TETROMINOS = {
  0: { shape: [[0]], color: "0,0,0" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "80, 227, 230",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "36, 95, 223",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "36, 95, 223",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "36, 95, 223",
  },
  S: {
    shape: [
      [0, "S", "S"],
      [0, "S", 0],
      ["S", "S", 0],
    ],
    color: "36, 95, 223",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "36, 95, 223",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "36, 95, 223",
  },
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randomTetro = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randomTetro];
};
