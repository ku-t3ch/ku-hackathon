import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'marker.png',
  iconSize: [40, 40], 
  iconAnchor: [16, 32],
});
<a href="https://www.flaticon.com/free-icons/google-maps" title="google maps icons">Google maps icons created by lalawidi - Flaticon</a>

interface MapboxProps {
  center: [number, number];
  zoom: number;
}

const MapBox: React.FC<MapboxProps> = ({ center, zoom }) => {
  return (
      <MapContainer 
        center={center} 
        zoom={zoom} 
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={customIcon}>
          <Popup>
            สํานักบริการคอมพิวเตอร์<div className="text-green-500">ม.เกษตรศาสตร์ (kU)</div>
          </Popup>
        </Marker>
      </MapContainer>
  );
};

export default MapBox;
