import { FiShuffle } from "react-icons/fi";
import Button from "./Button";

const RandomButton = ({ onCLick }) => {
  return (
    <Button variant="secondary" onClick={onCLick}>
      <FiShuffle />
    </Button>
  );
};

export default RandomButton;
