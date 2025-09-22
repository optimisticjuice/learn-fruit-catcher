import {FRUIT_SIZE} from "./GameUtils";

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