// TODO: very bad code atm, just trying to understand styled-cpn atm
import styled, { css } from "styled-components";

import { StyledButtonProps } from ".";
import { customTheme } from "../../styles/theme";

type CustomButtonStyledProps = Pick<StyledButtonProps, "btnStyle" | "btnSize" | "btnColor">;

export const NavBarStyledBtn = styled.button<CustomButtonStyledProps>`
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 4px;
  color: #fff;
  background-color: #242424;
  padding: 8px 20px;
  font-size: 18px;
  border: 1px solid #fff;
  transition: all 0.3s ease-out;
`;

export const HeroSectionStyledBtn = styled.button<CustomButtonStyledProps>`
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 4px;
  color: #fff;
  padding: 12px 64px;
  font-size: 20px;
  background-color: #276afb;
  transition: all 0.3s ease-out;
`;

export const PricingSectionStyledBtn = styled.button<CustomButtonStyledProps>`
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 4px;
  color: #fff;
  background-color: #242424;
  padding: 12px 64px;
  font-size: 20px;
  transition: all 0.3s ease-out;
`;

export const MobileStyledBtn = styled.button<CustomButtonStyledProps>`
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 4px;
  text-align: center;
  width: 80%;
  text-decoration: none;
  font-size: 24px;
  color: #fff;
  background-color: #242424;
  padding: 14px 20px;
  border: 1px solid #fff;
  transition: all 0.3s ease-out;
`;
