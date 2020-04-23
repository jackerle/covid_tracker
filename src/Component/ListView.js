import React, { useState } from 'react'
import { Button } from 'semantic-ui-react';
import List_Province from './ListViewComponent/List_Province';

function ListView(props){

    const { covid_today , covid_sum,onSelectProvince} = props

    const [today_content,setToday_content] = useState(true)


    const enableToday = ()=>{
        setToday_content(true);
    }

    const disableToday = ()=>{
        setToday_content(false);
    }

    const list_all = function(){
        if(covid_today!==null){

            const {
                Confirmed,Recovered,Hospitalized,Deaths,
                UpdateDate
            } = covid_today

            let css_content = {
                'display':today_content?'none':'block',
            }

            return(
                <div style={css_content} className="list-view-content-detail">
                    <h6>ผู้ติดเชื้อโดยรวมทั้งสิ้น : {Confirmed} คน</h6>
                    <h6>รักษาหายแล้วทั้งสิ้น : {Recovered} คน</h6>
                    <h6>รักษาตัวในโรงพยาบาล : {Hospitalized} คน</h6>
                    <h6>เสียชีวิตทั้งสิ้น : {Deaths} คน</h6>
                    <h6 style={{'text-align':'center'}}>ข้อมูลเมื่อวันที่ : {UpdateDate}</h6>
                </div>
            );
        }
    };

    const list_today = function(){
        if(covid_today!==null){
            const {
                NewConfirmed,NewRecovered,NewHospitalized,NewDeaths,
                UpdateDate
            } = covid_today

            let css_content = {
                'display':today_content?'block':'none',
            }

            return(
                <div style={css_content} className="list-view-content-detail">
                    <h6>ผู้ติดเชื้อวันนี้ : {NewConfirmed} คน</h6>
                    <h6>รักษาหายแล้ววันนี้ : {NewRecovered} คน</h6>
                    <h6>รักษาตัวในโรงพยาบาลวันนี้ : {NewHospitalized} คน</h6>
                    <h6>เสียชีวิตวันนี้ : {NewDeaths} คน</h6>
                    <h6 style={{'text-align':'center'}}>ข้อมูลเมื่อวันที่ : {UpdateDate}</h6>
                </div>
            );
        }
    }

    return(
        <div className="list-view">
            <div className="list-view-header">
                <h2 style={{"text-align":"center"}}>Covid Tracker</h2>
                <hr/>
                <h5>สถานการณ์ปัจจุบัน-ประเทศไทย</h5>
            </div>
            <div className="list-view-content">
                    <Button className="ui-button-content" onClick={enableToday} style={{'opacity':today_content?'1':'0.4',}}>Today</Button>
                    <Button className="ui-button-content" onClick={disableToday} style={{'opacity':today_content?'0.4':'1',}}>All</Button>
                {list_all()}
                {list_today()}
            </div>
            <List_Province covid_sum={covid_sum} onSelectProvince={onSelectProvince}/>
        </div>
    );
}

export default ListView;