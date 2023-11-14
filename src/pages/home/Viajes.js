import React, { useState} from 'react';
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

  return (
    <div className="Viajes">
      <div className="Viajes-body">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <div className="Viajes-map" style={{ height: 'calc(100vh - 100px)' }}>
          <MapContainer center={[centerLat, centerLng]} zoom={13} style={{ 
            height: '50%',
            width: '50%',
            position: 'absolute',
           }}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Routing />
          </MapContainer>
          <div className="Viajes-info">
            <p>Haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Viajes;
