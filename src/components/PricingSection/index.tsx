import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

import "./styles.css";
import XButton from "../XButton";

const PricingSection = (): JSX.Element => {
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: "64" }}>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              {/*  */}
              <Link to="signUp" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Starter</h3>
                  <h4>9.99$</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>100 Transactions</li>
                    <li>2% CashBack</li>
                    <li>10.000$ Limit</li>
                  </ul>
                  <XButton btnStyle="hero" text="Choose Plan" />
                </div>
              </Link>

              {/*  */}
              <Link to="signUp" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Standard</h3>
                  <h4>19.99$</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>1000 Transactions</li>
                    <li>5% CashBack</li>
                    <li>25.000$ Limit</li>
                  </ul>
                  <XButton btnStyle="hero" text="Choose Plan" />
                </div>
              </Link>

              {/*  */}
              <Link to="signUp" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Premium</h3>
                  <h4>29.99$</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>5000 Transactions</li>
                    <li>10% CashBack</li>
                    <li>100.000$ Limit</li>
                  </ul>
                  <XButton btnStyle="hero" text="Choose Plan" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default PricingSection;
