import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";

import { styled } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

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


export function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const cartItem = useSelector((state) => state.foods.cartItem);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar {...args} expand className="navbar">
        <NavbarBrand href="/" className="navbarBrand">
          <i class="fa-solid fa-seedling"></i>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLink>
              <Link to="/" className="navbarBrand">
                Home &nbsp;
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/" className="navbarBrand">
                BMI &nbsp;
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/calculatorcalo" className="navbarBrand">
                Calorie Calculator &nbsp;
              </Link>
            </NavLink>

            <NavLink className="navbarBrand">
              <Link to="/dailycalo" className="navbarBrand">
                Daily Calorie
              </Link>
            </NavLink>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Link className="navbarBrand">Gallery</Link>
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
            Admin Page
          </Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
