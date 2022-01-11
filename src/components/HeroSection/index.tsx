import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import XButton from "../XButton";

export type HeroSectionProps = {
  lightBg: boolean;
  topLine: string;
  lightText: boolean;
  lightTextDesc: boolean;
  headline: string;
  description: string;
  btnLabel: string;
  img: string;
  alt: string;
  imgStart: string;
};

const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  btnLabel,
  img,
  alt,
  imgStart
}: HeroSectionProps): JSX.Element => {
  return (
    <>
      <div className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}>
        <div className="container">
          <div
            className="row home__hero-row"
            style={{ display: "flex", flexDirection: imgStart === "start" ? "row-reverse" : "row" }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>{headline}</h1>
                <p className={lightTextDesc ? "home__hero-subtitle" : "home__hero-subtitle dark"}>{description}</p>
                <Link to="signUp">
                  <XButton btnStyle="hero" text={btnLabel} />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
