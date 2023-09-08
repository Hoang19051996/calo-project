

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
import Badge from '@mui/material/Badge';
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";


export function Header({transparent}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const cartItem = useSelector((state) => state.foods.cartItem);
  const navigate = useNavigate();

  const { t } = useTranslation("translation");
  const onClickVN = () => {
   
    i18n.changeLanguage("vie");
  }
  const onClickEN = () => {
   
    i18n.changeLanguage("eng");
  }

  return (
    <div>
      <Navbar  expand className="navbar" style={{backgroundColor: `${transparent}`}}>
        <NavbarBrand href="/" className="navbarBrand">
          <i class="fa-solid fa-seedling" ></i>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
        

            <NavLink>
              <Link to="/bmi" className="navbarBrand">
                BMI &nbsp;
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/calculatorcalo" className="navbarBrand">
               {t("calorie_calculator")} &nbsp;
              </Link>
            </NavLink>

            <NavLink >
              <Link to="/dailycalo" className="navbarBrand">
              {t("daily_calorie")}
              </Link>
            </NavLink>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Link className="navbarBrand"> {t("gallery")}</Link>
              </DropdownToggle>
              <DropdownMenu right className="navbarBrand">
                <DropdownItem className="navbarBrand">Food</DropdownItem>
                <DropdownItem className="navbarBrand">Activities</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <div onClick={() => navigate("/cart-detail")}  style={{cursor: "pointer"}}>
          


            <Badge badgeContent={cartItem.length}  color="error"  size="large">
            <ShoppingCartIcon />
            </Badge>
          </div>
          <Link to="/admin" className="navbarBrand">
          {t("title-admin")}
          </Link>
        
         <img src={EN} width={"30px"} onClick={() => onClickEN()}/> &nbsp;
         <img src={VN} width={"30px"} onClick={() => onClickVN()}/>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
