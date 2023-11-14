import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

const Routing = ({ setDistancia }) => {
  const map = useMap();
  const inicio = new URLSearchParams(window.location.search).get('inicio');
  const fin = new URLSearchParams(window.location.search).get('fin');
  const [inicioMarker] = useState(inicio ? inicio.split(',').map(parseFloat) : [0, 0]);
  const [finMarker] = useState(fin ? fin.split(',').map(parseFloat) : [0, 0]);

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(inicioMarker[0], inicioMarker[1]), L.latLng(finMarker[0], finMarker[1])],
      routeWhileDragging: true,
      show: false,
    }).addTo(map);

    // Actualizar el enrutamiento cuando cambien las coordenadas de inicio o fin
    routingControl.setWaypoints([L.latLng(inicioMarker[0], inicioMarker[1]), L.latLng(finMarker[0], finMarker[1])]);

    // Manejar el evento 'routesfound' para obtener y actualizar la distancia
    routingControl.on('routesfound', function (e) {
      const routes = e.routes;
      let calculatedDistance = 0;

      // Suma las distancias de todas las rutas encontradas
      routes.forEach(function (route) {
        calculatedDistance += route.summary.totalDistance;
      });

      // Actualiza la distancia utilizando la función pasada como prop
      setDistancia(calculatedDistance);
    });

    return () => map.removeControl(routingControl);
  }, [map, inicioMarker, finMarker, setDistancia]);

  return null;
};

export default Routing;
