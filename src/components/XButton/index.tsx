import { BsSticky } from "react-icons/bs";
import * as Styled from "./styles";

export type StyledButtonProps = {
  text: string;
  btnType?: "submit" | "reset" | "button";
  btnClickHdlr?: React.MouseEventHandler<HTMLButtonElement>;
  btnStyle?: "navbar" | "hero" | "mobile";
  btnSize?: string;
  btnColor?: "primary" | "secondary";
};

const BTN_SIZE = ["btn--medium", "btn--large", "btn--mobile", "btn--huge"];

const XButton = ({ text, btnType, btnClickHdlr, btnStyle, btnSize, btnColor }: StyledButtonProps): JSX.Element => {
  return (
    <>
      {/* <button className={`btn ${btnStyle} ${btnSize} ${btnColor}`} onClick={btnClickHdlr} type={btnType}>
        {text}
      </button> */}
      {/* <Styled.Foo
        // className={`btn ${btnStyle} ${btnSize} ${btnColor}`}
        btnStyle={btnStyle}
        btnColor={btnColor}
        onClick={btnClickHdlr}
        type={btnType}
      >
        {text}
      </Styled.Foo> */}
      {btnStyle === "navbar" && <Styled.NavBarStyledBtn>{text}</Styled.NavBarStyledBtn>}
      {btnStyle === "hero" && <Styled.HeroSectionStyledBtn>{text}</Styled.HeroSectionStyledBtn>}
      {btnStyle === "mobile" && <Styled.MobileStyledBtn>{text}</Styled.MobileStyledBtn>}
    </>
  );
};

export default XButton;
