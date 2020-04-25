import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'
import p_latlong from '../../LatLong/province.json'


function List_Province(props){

    const [province_latlong,setProvince_latlong] = useState(p_latlong)
    const [valueSearch,setValueSearch] = useState("")
    const { covid_sum , onSelectProvince } = props

    
    const list_province = Object.keys(province_latlong).map((key,index)=>{
        const {province_en,province_thai} = province_latlong[index]
        let sum
        if(covid_sum[province_en]>0){
            console.log(covid_sum[province_en])
            sum = covid_sum[province_en]
        } 
        else {
            sum = 0;
        }
            


        if(valueSearch==""){
            return(
                <div key={`${province_en}`} className= {"list_province"} onClick={()=>{onSelectProvince(province_en)}}>
                    <h4>{province_thai}  : {sum} คน</h4>
                    <hr/>
                </div> 
            )
        }
        else if (province_thai.indexOf(valueSearch)!=-1){
            return(
                <div key={`${province_en}`} className= {"list_province"}  onClick={()=>{onSelectProvince(province_en)}}>
                <h4>{province_thai}   {sum} คน</h4>
                <hr/>
            </div> 
            )
        }
       
        
    })

    const onChangeSearch = function(event){
        setValueSearch(event.target.value);
        console.log(valueSearch)
    }


    
    

    return(
       <div className= "list-view-search">
           <Input type="text" className="search-bar" placeholder='Search province...' onChange={onChangeSearch}/>
           {list_province}
       </div>

    )
}

export default List_Province;