import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
                <div className='Pag-0'>
                    <div className='Pag-1'>
                        <h2 className='Sub-1'>Unete a nuestra comunidad y empieza a viajar y ganar dinero de una manera innovadora y útil</h2>
                        <Link to="Pag-2" smooth={true} duration={300} offset={-40}>
                            <button className='Bot-1'>¡Registrate aquí!</button>
                        </Link>
                    </div>
                </div>
                <div className='Pag-2'>
                    <div className='Box-1'>
                        <div className='Box-2'>
                            <h2 className='Sub-2'>Conductor</h2>
                            <p>Conviertete en CONDUCTOR y empieza a ganar dinero camino a tu lugar de estudio o trabajo. La flexibilidad marca este sector y la seguridad esta asegurada. Registrate aqui!!</p>
                            <img src={require('../../images/conductor.png')} alt='cond' />
                        <Link to="/conductores">
                            <button className='Bot-1' onClick={() => (window.location.href = '/conductores')}>¡Registrate aquí!</button>
                        </Link>
                        </div>
                        <div className='Box-3'>
                            <h2 className='Sub-3'>Pasajero</h2>
                            <p>Convierete en PASAJERO y unete a viajes de manera rapida y barata a tus lugares de trabajo o estudio. Tu seguridad es nuestra prioridad, al viajar con nosotros, la estas asegurando. Registrate aqui!!</p>
                            <img src={require('../../images/pasajero.png')} alt='cond' />
                        <Link to="/pasajeros">
                            <button className='Bot-1' onClick={() => (window.location.href = '/pasajeros')}>¡Registrate aquí!</button>
                        </Link>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
