import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPenRuler,
  faArrowAltCircleLeft,
  faCartShopping,
  faUser,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  // const [isLogin, useLogin] = useState(localStorage.getItem("token"));
    const [isLogin, useLogin] = useState(false);

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
            <FontAwesomeIcon className='headerUp--icon' icon={faPenRuler} />

            <button className="headerUp__designBtn">
              <Link className="headerUp__designBtnLink--primary" to="/Learn">
                طراحی کنید
              </Link>
            </button>
          </div>
          {isLogin && (
            <>
              <div className="headerUp__design headerUp__design-primary  headerUp__user2">
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className="headerUp__design headerUp__design-primary headerUp__user">
                <Link className='userDashboard' to="./DesignerDashboard"><FontAwesomeIcon icon={faUser} /></Link>
              </div>
            </>
          )}
          {!isLogin && (
            <div className="headerUp__design headerUp__design-primary">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />

              <button className="headerUp__designBtn headerUp__designBtn-primary">
                <Link className="headerUp__designBtnLink" to="/Login">
                  ورود
                </Link>
                &nbsp;|&nbsp;
                <Link className="headerUp__designBtnLink" to="/SignUp">
                  ثبت نام
                </Link>
              </button>
            </div>
          )}
          <div className="headerUp__shop_icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
