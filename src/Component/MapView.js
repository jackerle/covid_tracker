import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import {divIcon} from 'leaflet';


/*
  red = >500
  pink = >70
  green <=69

*/ 
const icon = {
  red : divIcon({className: 'marker-icon red',iconSize:[32,32]}),
  pink : divIcon({className: 'marker-icon pink',iconSize:[32,32]}),
  green : divIcon({className: 'marker-icon green',iconSize:[32,32]})
}



function MapView(props){

    const {province_latlong,mapCenter,covid_sum,onSelectProvince} = props

    const markerCreate = Object.keys(province_latlong).map((key,index)=>{
      //console.log(province_latlong[index]);
      const {province_en,province_thai,lat,long} = province_latlong[index]
      //console.log(id+" "+province)
      let title = province_thai;
      let icn
      let sum = covid_sum[province_en]
      if(sum>500)icn = icon.red;
      else if(sum>=70) icn = icon.pink;
      else icn = icon.green;
      return (
        
        <Marker
          key = {`province-${province_en}`}
          position = {[lat,long]}
          icon = {icn}
          onclick = {()=>{
            onSelectProvince(province_en)
          }}
        >
          <Popup>{title} มีผู้ป่วย {sum} คน</Popup>
        </Marker>
      )
    })



    return(

        <Map className="map-view" center={mapCenter} zoom={13}>
          {console.log(province_latlong)}
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerCreate}
      </Map>
    );
}

export default MapView;