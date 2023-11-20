import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import Navbar from '../../Components/Navbar/index';
import Sidebar from '../../Components/Sidebar/index';
import Footer from '../../Components/Footer/index';
import './Viajes.css';
import Routing from '../../Components/Routing';

function Viajes() {
  const [isOpen, setIsOpen] = useState(false);
  const [distancia, setDistancia] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const inicio = params.get('inicio');
  const fin = params.get('fin');
  const [inicioMarker] = useState(inicio ? inicio.split(',').map(parseFloat) : [0, 0]);
  const [finMarker] = useState(fin ? fin.split(',').map(parseFloat) : [0, 0]);
  const centerLat = (inicioMarker[0] + finMarker[0]) / 2;
  const centerLng = (inicioMarker[1] + finMarker[1]) / 2;
  const [precios] = useState({
    tarifaBase: 750,
    tarifaKilometro: 200,
  });

  const tarifaTope = 6500;

  // Calcula el total sin superar el tope
  const total = Math.min(
    precios.tarifaBase + (distancia / 1000) * precios.tarifaKilometro,
    tarifaTope
  ).toFixed(2);

  return (
    <div className="Viajes">
      <div className="Viajes-body">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <div className="Viajes-map" style={{ height: 'calc(50vh - 100px)' }}>
          <MapContainer center={[centerLat, centerLng]} zoom={13} style={{ 
            height: '50%',
            width: '50%',
            position: 'absolute',
            borderRadius: '20px',
           }}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Routing setDistancia={setDistancia} />
          </MapContainer>
        </div>
        <div className="Viajes-info">
          <h2>Precios</h2>
          <p>Tarifa Base: ${precios.tarifaBase}</p>
          <p>Tarifa Tope: ${tarifaTope}</p>
          <p>Tarifa por Kilómetro: ${precios.tarifaKilometro}</p>
          <p>Distancia: {(distancia / 1000).toFixed(2)} km</p>
          <p>Total: ${total}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Viajes;
