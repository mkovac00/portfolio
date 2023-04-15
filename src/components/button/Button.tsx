import "./Button.scss";

import { BsArrowRight } from "react-icons/bs";

type ButtonProps = {
  text: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button className="btn">
      <span className="btn-text">{props.text}</span>
      <BsArrowRight className="btn-arrow" size={30} />
    </button>
  );
};

export default Button;
