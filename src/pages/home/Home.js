import React, { useState } from 'react';
import { Link, Element, scroller } from 'react-scroll'; // Import Element and scroller from react-scroll
import Navbar from '../../Components/Navbar/index';
import Sidebar from '../../Components/Sidebar/index';
import Footer from '../../Components/Footer/index';
import './Home.css';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Home">
            <div className="Home-body">
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <div className='Pag-1'>
                    <h2 className='Sub-1'>Unete a nuestra comunidad y empieza a viajar y ganar dinero de una manera innovadora y útil</h2>
                    <Link to="Pag-2" smooth={true} duration={1000}>
                        <button className='Bot-1'>¡Registrate aquí!</button>
                    </Link>
                </div>
                <div className='Pag-2'>
                    <div className='Box-1'>
                        <h2 className='Sub-2'>Conductor</h2>
                        <h2 className='Sub-3'>Pasajero</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
