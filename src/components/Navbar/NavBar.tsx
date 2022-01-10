import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

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

  useEffect(() => {
    showNVBtn();
    // return () => {
    //   cleanup;
    // };
  }, []);

  // wtf
  window.addEventListener("resize", showNVBtn);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              EZBank
            </Link>
            <div
              className="menu-icon"
              onClick={clickNBIconHdlr}
              onKeyDown={keyDownNBIconHdlr}
              role="button"
              tabIndex={0}
            >
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              {/*  */}
              <li className="nav-item">
                <Link to="service" className="nav-links" onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              {/*  */}
              <li className="nav-item">
                <Link to="products" className="nav-links" onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              {/*  */}
              <li className="nav-btn">
                {button ? (
                  <Link to="signUp" className="btn-link">
                    <XButton btnStyle="btn--outline" btnSize="btn--medium" text="SIGN UP" />
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
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
