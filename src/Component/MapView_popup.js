import React, { useEffect } from 'react'
import ClickAwayListener from 'material-ui/internal/ClickAwayListener';


function MapView_popup(props){

    const {
        eachCase,
        province_en,
        province_thai,
        sum,
        onSelectProvince
    } = props;

    
    let res = eachCase.filter(obj => obj.ProvinceEn == province_en)
    let title = province_thai;
    console.log(eachCase)
    const list_inflected = Object.keys(res).map((key,index)=>{
                let {
                    Age,ConfirmDate,District,Gender,Nation,No
                } = res[index]

                return(
                    <div key={`popup-map-${No}`} className = 'popup-map-content'>
                        <h4>ลำดับที่ {index+1} : อายุ {Age} ปี เพศ: {Gender}</h4>
                        <h4>สัญชาติ: {Nation} อำเภอ/เขต: {District}</h4>
                        <p style={{'font-size':'12px'}}>วันที่ยืนยัน: {ConfirmDate}</p> 
                        <hr/>
                    </div>
                )
        })
    
        const handleClickAway = ()=>{
            onSelectProvince(null)
        }

    return(
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="popup-map-content-wrapper">
            <h1>{title}</h1>
            <h2>มีผู้ป่วย {sum ==undefined? 0:sum} คน</h2>
           
            <div className = "popup-map-content-list-wrapper">
            {list_inflected}
            </div>
        </div>
        </ClickAwayListener>
        
    )
}

export default MapView_popup;