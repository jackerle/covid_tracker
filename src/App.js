import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import MapView from './Component/MapView';
import 'leaflet/dist/leaflet.css';
import p_latlong from './LatLong/province.json'
import ListView from './Component/ListView';
import Axios from 'axios';
import Template_Modal from './Component/Modal/Template_Modal';
import Start_modal from './Component/Modal/Start_modal'

//api 
const api = {
  today:"https://covid19.th-stat.com/api/open/today",
  province_covid:"https://covid19.th-stat.com/api/open/cases/sum"
}

function App() {

  /*set State for react
  */
  
  const [province_latlong,setProvince_latlong] = useState(p_latlong);
  const [covid_today,setCovidToday_Province] = useState({})
  const [covid_sum,setCovidSum] = useState({})
  const [mapCenter,setMapCenter] = useState([13.7278956,100.52412349999997])


  const onSelectProvince = useCallback((province_en)=>{
    const latlong = province_latlong.find(obj=>obj.province_en==province_en)
    if(latlong!=undefined){
      setMapCenter([latlong.lat,latlong.long])
    }
  },[province_latlong])



  useEffect(()=>{

    //get today 
    Axios.get(api.today).then(res=>{
      setCovidToday_Province(res.data)
    }).catch(err=>{
      console.log(err)
    })

    //get province sum
    Axios.get(api.province_covid).then(res=>{
      console.log(res.data.Province)
      setCovidSum(res.data.Province)
    }).catch(err=>{
      console.log(err)
    })
  },[])


  return (
    <div className="App">
      <Template_Modal modal_content={Start_modal}/>
      <ListView 
        covid_today = {covid_today} 
        covid_sum={covid_sum} 
        onSelectProvince = {onSelectProvince}/>
      <MapView 
        province_latlong={province_latlong} 
        mapCenter = {mapCenter}
        covid_sum={covid_sum}
        onSelectProvince = {onSelectProvince}/>
    </div>
  );
}

export default App;
