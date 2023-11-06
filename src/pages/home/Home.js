import React, { useState } from 'react'
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
                <div className='Pag'>
                    <h2 className='Sub-1'>Unete a nuestra comunidad y forma parte de</h2>
                    <h1 className='Tit-1'>Viajemos</h1>
                    <h2 className='Sub-2'>Viaja de una forma innovadora y gana dinero sin preocuparte de más</h2>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Home;
