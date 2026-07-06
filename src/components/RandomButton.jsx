import { FiShuffle } from "react-icons/fi";
import Button from "./Button";

const RandomButton = ({ onClick }) => {
  return (
    <Button variant="secondary" onClick={onClick}>
      <FiShuffle />
    </Button>
  );
};

export default RandomButton;
