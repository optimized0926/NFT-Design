import React from 'react'
import PropTypes from 'prop-types'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from 'reactstrap'

import logo from '../assets/img/homepage/Landing-Page-Logo.png'
import discord from '../assets/img/homepage/Vector_Smart_Object.png'
import twitter from '../assets/img/homepage/Twitter.png'
import opensea from '../assets/img/homepage/Opensea.png'

export default function Home() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="homepage position-relative" id="home">
            <Navbar expand="lg" className="custom-navbar-header">
                <Container>
                    <NavbarToggler onClick={toggle} key="MENU" />
                    <Collapse isOpen={isOpen} navbar className='nav-toggler'>
                        <Nav className="m-auto w-75 justify-content-between" navbar>
                            <NavItem>
                                <NavLink href="#home" className="text-white header-navbar">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#beyond" className="text-white header-navbar">BEYOND</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#mindmap" className="text-white header-navbar">MINDMAP</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#bags" className="text-white header-navbar">BAGS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#teams" className="text-white header-navbar">TEAMS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#faq" className="text-white header-navbar">FAQ</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row className='justify-content-center'>
                    <Col md="7" sm="9" xs="12">
                        <img src={logo} className='homepage-logo' alt="Logo" />
                    </Col>
                </Row>
            </Container>
            <div className='position-absolute d-flex' style={{top: "1.2vw", right: "1.2vw", gap: "1.2vw", height: "1.2vw"}}>
                <img src={opensea} alt="Opensea Icon" className='community-icon' />
                <img src={discord} alt="Discord Icon" className='community-icon' />
                <img src={twitter} alt="Twitter Icon" className='community-icon' />
            </div>
        </div>
    )
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}