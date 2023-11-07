import React, { useState } from 'react'
import { Nav, NavbarContainer, NavLogo, Logo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtinLink, NavBtn } from '../../Components/Navbar/NavbarElements'
import { Link, Element } from 'react-scroll';
import Navbar from '../../Components/Navbar/index'
import Sidebar from '../../Components/Sidebar/index'
import Footer from '../../Components/Footer/index'
import './Home.css'

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="Home">
            <div className="Home-body">
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <div className='Pag-1'>
                    <h2 className='Sub-1'>Unete a nuestra comunidad y empieza a viajar y ganar dinero de una manera innovadora y útil</h2>
                    <Link to="Pag-2" smooth={true} duration={500}>
                        <button className='Bot-1'>¡Conocenos!</button>
                    </Link>
                <div className='Pag-2'>
                    <h2 className='Sub-2'>¿Quieres viajar?</h2>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Home;
