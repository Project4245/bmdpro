import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


function CustomHeader(args) {
    // const [isOpen, setIsOpen] = useState(false);



    return (
        <div>
            <Navbar
                style={{ backgroundColor: "#f4f9fd" }}
                expand="md"
                fixed=""
                container="fluid"
                className="px-5"
            >

                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="#"><FontAwesomeIcon icon={faPhone} />  Call Us For Inquiry: +9090909090</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <FontAwesomeIcon icon={faEnvelope} /> Email: text@gmail.com
                        </NavLink>
                    </NavItem>

                </Nav>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="https://facebook.com" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://twitter.com" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://linkedin.com" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://instagram.com" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </NavLink>
                    </NavItem>
                </Nav>

            </Navbar>

        </div>
    );
}

export default CustomHeader;