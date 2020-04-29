import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import MapView from './Component/MapView';
import 'leaflet/dist/leaflet.css';
import p_latlong from './LatLong/province.json'
import ListView from './Component/ListView';
import Axios from 'axios';
import Template_Modal from './Component/Modal/Template_Modal';
import Start_modal from './Component/Modal/Start_modal'
import { popup } from 'leaflet';
import MapView_popup from './Component/MapView_popup';

//api 
const api = {
  today:"https://covid19.th-stat.com/api/open/today",
  province_covid:"https://covid19.th-stat.com/api/open/cases/sum",
  each_case:"https://covid19.th-stat.com/api/open/cases"
}

function App() {

  /*set State for react
  */
  
  const [province_latlong,setProvince_latlong] = useState(p_latlong);
  const [covid_today,setCovidToday_Province] = useState({})
  const [covid_sum,setCovidSum] = useState({})
  const [mapCenter,setMapCenter] = useState([13.7278956,100.52412349999997])
  const [selectedLocation,setSelectedLocation] = useState(null)
  const [eachCase,setEachCase] = useState([])



  const onSelectProvince = useCallback((province_en)=>{
    const latlong = province_latlong.find(obj=>obj.province_en==province_en)
    if(latlong!=undefined){
      setMapCenter([latlong.lat,latlong.long])
      setSelectedLocation(latlong)
    }
    else{
      setSelectedLocation(null)
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
      setCovidSum(res.data.Province)
    }).catch(err=>{
      console.log(err)
    })

    Axios.get(api.each_case).then(res =>{
      setEachCase(res.data.Data)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  const mapview_Popup = ()=>{
    if(selectedLocation != null){
    return(
      <MapView_popup 
        eachCase = {eachCase}
        province_en = {selectedLocation.province_en}
        province_thai = {selectedLocation.province_thai}
        sum = {covid_sum[selectedLocation.province_en]}
        onSelectProvince = {onSelectProvince}
        />
    )
    }
  }



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
        {mapview_Popup()}
    </div>
  );
}

export default App;
