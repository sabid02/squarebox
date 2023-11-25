import React from "react";
import boxes from "./boxes";
import Box from "./Box";

function App(props) {
  const [squares, setSquares] = React.useState(boxes);
  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }
  const boxElement = squares.map((square) => (
    <Box key={square.id} on={square.on} toggle={toggle} id={square.id} />
  ));

  return <main>{boxElement}</main>;
}

export default App;

// const newSquares = [];
//       for (let i = 0; i < prevSquare.length; i++) {
//         const currentSquare = prevSquare[i];
//         if (currentSquare.id === id) {
//           const updatedSquare = {
//             ...currentSquare,
//             on: !currentSquare.on,
//           };
//           newSquares.push(updatedSquare);
//         } else {
//           newSquares.push(currentSquare);
//         }
//       }
//       return newSquares;
