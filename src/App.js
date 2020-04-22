import React, { useState, useEffect } from 'react';
import './App.css';
import MapView from './Component/MapView';
import 'leaflet/dist/leaflet.css';
import p_latlong from './LatLong/province.json'

function App() {

  const [province_latlong,setProvince_latlong] = useState(p_latlong);


  return (
    <div className="App">
      <MapView province_latlong={province_latlong}/>
    </div>
  );
}

export default App;
