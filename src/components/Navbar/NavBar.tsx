import { useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

import "./NavBar.css";
import XButton from "../XButton/XButton";

const NavBar = (): JSX.Element => {
  const [click, setClick] = useState<boolean>();
  const [button, setButton] = useState<boolean>(true);

  //
  const clickNBIconHdlr: React.MouseEventHandler<HTMLDivElement> = (_evt) => {
    setClick(!click);
  };
  const keyDownNBIconHdlr: React.KeyboardEventHandler<HTMLDivElement> = (_evt) => {
    setClick(!click);
  };

  //
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showNVBtn = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // wtf
  window.addEventListener("resize", showNVBtn);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <MdFingerprint className="navbar-icon" />
            EZBank
          </Link>
          <div className="menu-icon" onClick={clickNBIconHdlr} onKeyDown={keyDownNBIconHdlr} role="button" tabIndex={0}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="" className="nav-links">
                Home
              </Link>
            </li>
            {/*  */}
            <li className="nav-item">
              <Link to="service" className="nav-links">
                Services
              </Link>
            </li>
            {/*  */}
            <li className="nav-item">
              <Link to="products" className="nav-links">
                Products
              </Link>
            </li>
            {/*  */}
            <li className="nav-btn">
              {button ? (
                <Link to="signUp" className="btn-link">
                  <XButton btnStyle="btn--outline" text="SIGN UP" />
                </Link>
              ) : (
                <Link to="signUp" className="btn-link">
                  <XButton btnStyle="btn--outline" btnSize="btn--mobile" text="SIGN UP" />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
