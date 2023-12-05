import React, { useState } from 'react';
import {
    NavbarText,
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
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CustomSiddebar from '../Sidebar/CustomSidebar';

function CustomNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className='CustomNavbar-container'>

            <Navbar color='light'

                expand="md"
                fixed=""
                container="fluid"
                className="px-5"
            >
                <NavbarBrand href="/">HMS</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/home/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/home/">About</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Pages
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Team</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Pricing</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>FAQ</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Comming Soon</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Tearms & Conditions</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Privacy Policy</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Insurance
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Travel Insurance</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Business Insurance</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Health Insurance</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Car Insurance</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Insurance Details</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Blog
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Blog Grid</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Blog Left Slidder</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Blog Right Slidder</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Blog Details</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem>
                            <NavLink href="/contact/">Contact</NavLink>
                        </NavItem>

                    </Nav>


                </Collapse>
                <NavbarBrand>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </NavbarBrand>
                <NavbarBrand>
                    <FontAwesomeIcon onClick={toggleNavbar} icon={faBars} >
                        <Collapse isOpen={isOpen}>
                            <CustomSiddebar />
                        </Collapse>
                    </FontAwesomeIcon>
                </NavbarBrand>
            </Navbar>

        </div>
    );
}

export default CustomNavbar;