import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <div>You are here</div>
    </Marker>
  );
};

const Map = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#00b207] mb-6">Map</h1>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-2xl font-bold mb-4">Find Nearby Produce</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Enter Location:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter your location"
          />
        </div>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map; 