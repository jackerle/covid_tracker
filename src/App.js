import React, { useState, useEffect } from 'react';
import './App.css';
import MapView from './Component/MapView';
import 'leaflet/dist/leaflet.css';
import p_latlong from './LatLong/province.json'
import ListView from './Component/ListView';
import Axios from 'axios';

const api = {
  today:"https://covid19.th-stat.com/api/open/today",
  province_covid:"https://covid19.th-stat.com/api/open/cases/sum"
}

function App() {

  const [province_latlong,setProvince_latlong] = useState(p_latlong);
  const [covid_today,setCovidToday_Province] = useState(null)

  useEffect(()=>{
    Axios.get(api.today).then(res=>{
      setCovidToday_Province(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])


  return (
    <div className="App">
      <ListView covid_today = {covid_today}/>
      <MapView province_latlong={province_latlong}/>
    </div>
  );
}

export default App;
