import React from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import {divIcon} from 'leaflet';



function MapView(props){

    const {province_latlong} = props

    const markerCreate = Object.keys(province_latlong).map((key,index)=>{
      //console.log(province_latlong[index]);
      const {province_en,province_thai,lat,long} = province_latlong[index]
      //console.log(id+" "+province)
      let title = province_thai;
      return (
        
        <Marker
          key = {`province-${province_en}`}
          position = {[lat,long]}
          icon = {divIcon({className:'marker-icon',iconSize:[16,16]})}
        >
          <Popup>{title}</Popup>
        </Marker>
      )
    })

    return(
        <Map className="map-view" center={[13.7278956,100.52412349999997]} zoom={13}>
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