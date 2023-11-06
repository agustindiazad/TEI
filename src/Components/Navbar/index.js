import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, Logo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtinLink, NavBtn } from './NavbarElements'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            {/* <Logo2 src={require('../../../images/Logo.png')} alt='logo' /> */}
                            <Logo src={require('../../images/logo1.png')} alt='logo' />
                            {/* <Logo src={require('../../../images/Logo-v3.png')} alt='logo' /> */}
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <a href='/' style={{ textDecoration: 'none', color: '#fff', fontSize: '1rem', height: '100%', display: 'flex', alignItems: 'center' }}>Home</a>
                                {/* <NavLinks to='us' smooth={true} duration={1000} spy={true} exact='true' offset={-150}>¿Que hacemos?</NavLinks> */}
                            </NavItem>
                            <NavItem>
                                <NavLinks to='' ></NavLinks>
                            </NavItem>
                            <NavItem>
                                <a href='/conductores' style={{ textDecoration: 'none', color: '#fff', fontSize: '1rem', height: '100%', display: 'flex', alignItems: 'center' }}>Conductores</a>
                                {/* <NavLinks to='us' smooth={true} duration={1000} spy={true} exact='true' offset={-150}>¿Que hacemos?</NavLinks> */}
                            </NavItem>
                            <NavItem>
                                <NavLinks to='' ></NavLinks>
                            </NavItem>
                            <NavItem>
                                <a href='/pasajeros' style={{ textDecoration: 'none', color: '#fff', fontSize: '1rem', height: '100%', display: 'flex', alignItems: 'center' }}>Pasajeros</a>
                                {/* <NavLinks to='us' smooth={true} duration={1000} spy={true} exact='true' offset={-150}>¿Que hacemos?</NavLinks> */}
                            </NavItem>
                            <NavItem>
                                <NavLinks to='' ></NavLinks>
                            </NavItem>
                            <NavItem>
                                <a href='/viajes' style={{ textDecoration: 'none', color: '#fff', fontSize: '1rem', height: '100%', display: 'flex', alignItems: 'center' }}>Viajes</a>
                                {/* <NavLinks to='us' smooth={true} duration={1000} spy={true} exact='true' offset={-150}>¿Que hacemos?</NavLinks> */}
                            </NavItem>
                            <NavItem>
                                <NavLinks to='' ></NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtinLink to='/registro'>¡Registrate!</NavBtinLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
