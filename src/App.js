import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './App.css';

function App() {
  const position = [51.505, -0.09];
  return (
    <MapContainer
      className="main"
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
