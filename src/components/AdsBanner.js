import React, { useEffect, useState } from 'react';
import AdsModel from './../models/ads/index';

const AdsBanner = ({widht = '70vw', isRefresh = false}) => {
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const [data, setData] = useState({})
    const [refresh, setRefresh] = useState(false);
    useEffect(()=>{
        setData(AdsModel[random(0, AdsModel.length)])
        const interval = setInterval(() => {
            setData( AdsModel[random(0, AdsModel.length)])
            console.log('test')
          }, 5000);
          return () => clearInterval(interval);
    },[])
    return (
        <div style={{marginTop : 20}}>
        <center><i>Iklan</i> <br/></center>
        <a href={data.link} target={'_blank'}>
          <img src={data.img_url}
          alt={data.alt}
          style={{width : widht, marginTop:5}} />
          </a>
        </div>
        
    );
};

export default AdsBanner;