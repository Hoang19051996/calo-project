import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import EN from "../Assets/ENG.jpg";
import VN from "../Assets/VN.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import Badge from "@mui/material/Badge";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

export function Header({ transparent }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const cartItem = useSelector((state) => state.foods.cartItem);
  const navigate = useNavigate();

  const { t } = useTranslation("translation");
  const onClickVN = () => {
    i18n.changeLanguage("vie");
  };
  const onClickEN = () => {
    i18n.changeLanguage("eng");
  };

  return (
    <>
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-light b"
          style={{ backgroundColor: `${transparent}` }}
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              {" "}
              <i class="fa-solid fa-seedling"></i>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse d-flex justify-content-between"
              id="navbarSupportedContent"
            >
              <div>
                <Link to="/bmi" className="navbarBrand" style={{textDecoration: "none"}}>
                  BMI &nbsp;&nbsp;&nbsp;
                </Link>
                <Link to="/calculatorcalo" className="navbarBrand">
                  {t("calorie_calculator")} &nbsp;&nbsp;&nbsp;
                </Link>
                <Link to="/dailycalo" className="navbarBrand">
                  {t("daily_calorie")}&nbsp;&nbsp;&nbsp;
                </Link>
                <Link className="navbarBrand"> {t("gallery")}</Link>
              </div>
              <div>
                <div className="d-flex" >
                <div
                  onClick={() => navigate("/cart-detail")}
                  style={{ cursor: "pointer" }}
                >
                  <Badge
                    badgeContent={cartItem.length}
                    color="error"
                    size="large"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                  </div>
                  <div>
                  <Link to="/admin" className="navbarBrand">
                    {t("title_admin")}
                  </Link>
                  <img src={EN} width={"30px"} onClick={() => onClickEN()} />{" "}
                  &nbsp;
                  <img src={VN} width={"30px"} onClick={() => onClickVN()} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
