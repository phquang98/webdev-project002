import { useState } from "react";

import "./XButton.css";

type XButtonProps = {
  text: string;
  btnType?: "submit" | "reset" | "button";
  btnClickHdlr?: React.MouseEventHandler<HTMLButtonElement>;
  btnStyle?: string;
  btnSize?: string;
  btnColor?: string;
};

const BTN_STYLES = ["btn--primary", "btn--outline"];
const BTN_SIZE = ["btn--medium", "btn--large", "btn--mobile", "btn--huge"];
const BTN_COLOR = ["primary", "red", "blue", "green"];

const XButton = ({ text, btnType, btnClickHdlr, btnStyle, btnSize, btnColor }: XButtonProps): JSX.Element => {
  return (
    <>
      <button className={`btn ${btnStyle} ${btnSize} ${btnColor}`} onClick={btnClickHdlr} type={btnType}>
        {text}
      </button>
    </>
  );
};

export default XButton;
