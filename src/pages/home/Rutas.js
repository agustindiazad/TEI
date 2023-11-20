import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/index'
import Sidebar from '../../Components/Sidebar/index'
import Footer from '../../Components/Footer/index'
import Card from '../../Components/Card/Cards'
import './Rutas.css'

function Rutas() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    const [robohashData, setRobohashData] = useState([]);

    useEffect(() => {
      const fakeRobohashData = [
        { name: 'Benjamín', url: 'https://robohash.org/1', inicio: '-33.48759561443719, -70.51847128333844', fin: '-33.40781617786421, -70.54509624249715' },
        { name: 'Paola', url: 'https://robohash.org/2', inicio: '-33.41594135700607, -70.54431924899053', fin: '-33.50505936244322, -70.77596870115197' },
        { name: 'Felipe', url: 'https://robohash.org/3', inicio: '-33.438045039530245, -70.61220374386107', fin: '-33.5612941606357, -70.55761542501817' },
        { name: 'Victoria', url: 'https://robohash.org/4', inicio: '-33.41354611372836, -70.5411359328696', fin: '-33.514935294534354, -70.71760382581931' },
        { name: 'Iñaki', url: 'https://robohash.org/5', inicio: '-33.62261016349855, -70.57455398009971', fin: '-33.34588748075375, -70.5169316776774' },
        { name: 'Mario', url: 'https://robohash.org/6', inicio: '-33.45799723719943, -70.66275076653399', fin: '-33.596876599306086, -70.5785021915908' },
        { name: 'Jaqueline', url: 'https://robohash.org/7', inicio: '-33.44526894159198, -70.57180931203908', fin: '-33.364140423471135, -70.67785696541999' },
      ];
  
      setRobohashData(fakeRobohashData);
    }, []);

    return (
        <div className="Rutas">
            <div className="Rutas-body">
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <div className="Rutas-card">
                    {robohashData.map((item, index) => (
                    <div className="Rutas-card-title">
                    <Link style={{textDecoration: 'none', color: '#191919'}} to={`/viajes/${index}?inicio=${item.inicio}&fin=${item.fin}`} key={index}>
                        <Card title={item.name} image={item.url} inicio={item.inicio} fin={item.fin} />
                    </Link>
                    </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Rutas;