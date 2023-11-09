import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import geolib from 'geolib';
import { Icon } from 'leaflet'
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import Navbar from '../../Components/Navbar/index'
import Sidebar from '../../Components/Sidebar/index'
import Footer from '../../Components/Footer/index'
import './Viajes.css'

function Viajes() {
    const [isOpen, setIsOpen] = useState(false);
    const [inicioMarker, setInicioMarker] = useState({
        lat: -33.45091110961121,
        lng: -70.6511325854135,
    });

    const [finMarker, setFinMarker] = useState({
        lat: -33.45091110961121,
        lng: -70.6511325854135,
    });

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
        iconSize: [25, 25]
    });

    const handleLatitudInicioChange = (event) => {
        setInicioMarker({
            ...inicioMarker,
            lat: parseFloat(event.target.value) || 0,
        });
    }

    const handleLongitudInicioChange = (event) => {
        setInicioMarker({
            ...inicioMarker,
            lng: parseFloat(event.target.value) || 0,
        });
    }

    const handleLatitudFinChange = (event) => {
        setFinMarker({
            ...finMarker,
            lat: parseFloat(event.target.value) || 0,
        });
    }

    const handleLongitudFinChange = (event) => {
        setFinMarker({
            ...finMarker,
            lng: parseFloat(event.target.value) || 0,
        });
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="Viajes">
            <div className="Viajes-body">
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <div className="Viajes-map">
                    <MapContainer className='Mapa' center={[inicioMarker.lat, inicioMarker.lng]} zoom={12}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        /> 
                        <Marker position={[inicioMarker.lat, inicioMarker.lng]} icon={customIcon}>
                            <Popup>
                                Punto de inicio
                            </Popup>
                        </Marker>

                        <Marker position={[finMarker.lat, finMarker.lng]} icon={customIcon}>
                            <Popup>
                                Punto de destino
                            </Popup>
                        </Marker>
                    </MapContainer>
                    <div className="Viajes-text">
                        <h1>¿Dónde quieres viajar?</h1>
                        <div className="Viajes-total">
                            <div className="Viajes-inputs1">
                                <h2 className='Viajes-inicio'>Escribe tu latitud de inicio</h2>
                                <input className='Viajes-input1' type="text" placeholder="Latitud inicio" onChange={handleLatitudInicioChange} value={inicioMarker.lat} />
                                <h2 className='Viajes-fin'>Escribe tu longitud de inicio</h2>
                                <input className='Viajes-input2' type="text" placeholder="Longitud inicio" onChange={handleLongitudInicioChange} value={inicioMarker.lng} />
                            </div>
                            <div className="Viajes-inputs2">
                                <h2 className='Viajes-inicio'>Escribe tu latitud de fin</h2>
                                <input className='Viajes-input1' type="text" placeholder="Latitud fin" onChange={handleLatitudFinChange} value={finMarker.lat} />
                                <h2 className='Viajes-fin'>Escribe tu longitud de fin</h2>
                                <input className='Viajes-input2' type="text" placeholder="Longitud fin" onChange={handleLongitudFinChange} value={finMarker.lng} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Viajes;
