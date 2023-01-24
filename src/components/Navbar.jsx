import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPenRuler,
  faArrowAltCircleLeft,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import SignUp1 from "./SignUp1";

function Navbar() {
  return (
    <>
      <div className="headerUp">
        <div className="headerUp__right">
          <div className="headerUp__logo"></div>
          <div className="headerUp__search">
            <input placeholder="جست و جو کنید" className="headerUp__input" />
            <div className="headerUp__searchIcon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
        <div className="headerUp__left">
          <div className="headerUp__design">
            <FontAwesomeIcon icon={faPenRuler} />

            <button className="headerUp__designBtn">طراحی کنید</button>
          </div>
          <div className="headerUp__design headerUp__design-primary">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />

              <button className="headerUp__designBtn headerUp__designBtn-primary">
                <Link to="/Login">ورود</Link>&nbsp;|&nbsp;<Link to="/SignUp1">ثبت نام</Link>
              </button>

          </div>
          <div className="headerUp__shop_icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
