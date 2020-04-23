import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'



function List_Province(props){

    const [valueSearch,setValueSearch] = useState("")
    const { covid_sum } = props

    
    const list_province = Object.keys(covid_sum).map((key,index)=>{
        
        if(valueSearch==""){
            return(
                <div key={`${key}`} className= {"list_province"}>
                    <h4>{key}     {covid_sum[key]} คน</h4>
                    <hr/>
                </div> 
            )
        }
        else if (key.toUpperCase().indexOf(valueSearch.toUpperCase())!=-1){
            return(
                <div key={`${key}`} className={"list_province"}>
                    <h4>{key}     {covid_sum[key]} คน</h4>
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