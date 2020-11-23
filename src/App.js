import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

function App() {
  const position = [51.474, -360.08];

  return (
    <MapContainer
      className="main"
      center={position}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={position}>
        <Popup>
          Welcome to. <br /> London.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
