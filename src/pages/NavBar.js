import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

function NavBar(params) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container">
            <Navbar light expand="md">
                <NavbarBrand><img src="img/logo.png" alt="" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Shop</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Checkout</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink classNam="cart" href="#">cart</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;





