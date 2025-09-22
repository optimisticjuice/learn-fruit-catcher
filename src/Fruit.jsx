import {FRUIT_SIZE, fruitImages} from "./GameUtils";
export const image = fruitImages;
const Fruit = ({ x, y, image }) => {
  const style = {
    position: "absolute",
    left: x,
    top: y,
    width: FRUIT_SIZE,
    height: FRUIT_SIZE,
    imageRendering: "crisp-edges", 
    userSelect: "none",
    pointerEvents: "none",
    zIndex: 1
  };
  return <img src={image} alt="fruit" style={style} draggable={false} />;
};

export default Fruit;