import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
} from "reactstrap";
import Badge from "@mui/material/Badge";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Header( ) {
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
    <div>
      <Navbar expand="md" style={{  position:"sticky", top: 0 }}>
        <NavbarBrand href="/">
          <i class="fa-solid fa-house fa-xl"></i>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/bmi" className="navbarBrand">
                  BMI&nbsp;&nbsp;&nbsp;
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/calculatorcalo" className="navbarBrand">
                  {t("calorie_calculator")} &nbsp;&nbsp;&nbsp;
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="/dailycalo" className="navbarBrand">
                  {t("daily_calorie")}&nbsp;&nbsp;&nbsp;
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/freshfruit" className="navbarBrand">
                  {t("gallery")}&nbsp;&nbsp;&nbsp;
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="/combo" className="navbarBrand">
                  {t("menu")}&nbsp;&nbsp;&nbsp;
                </Link>
              </NavLink>
            </NavItem>

            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>
            <div>
              <div className="d-flex">
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
                  &nbsp; &nbsp;
                  <img
                    src={EN}
                    width={"30px"}
                    onClick={() => onClickEN()}
                  />{" "}
                  &nbsp;
                  <img src={VN} width={"30px"} onClick={() => onClickVN()} />
                </div>
              </div>
            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
