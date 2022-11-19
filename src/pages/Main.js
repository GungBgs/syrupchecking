import React, { useEffect, useState } from 'react'
import { Breadcrumb, Layout, Menu, Row } from 'antd';
import SearchField from './../components/SearchField';
import ResultList from '../components/ResultList';

import SearchSimilar from '../components/atoms/SearchSimilar';
import GetData from './../models/data/index';
import Title from 'antd/es/typography/Title';
const { Footer, Content } = Layout;

function Main() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(()=> {
    GetData.then((v)=> {
      setData(v)
    })
    }, [])

  return (
    <Layout className="layout" style={{
      minHeight : '100vh',
      height : 'auto'

    }}>
    
    <Content
      style={{
        padding: '0 50px',
      }}
    >

      <Row justify="center" align="center" style={{margin : 40}}>
        <Title style={{fontSize : getHighScreenSize()/20, textAlign : 'center'}}>
          Syrup Checking
        </Title>
        </Row>
      <Row justify="center" align="center" style={{margin : 40}}>
      <SearchField eventOnChange={setSearch} eventOnSelect={setSearch}  data={data}/> 
      </Row>
      <Row justify='center' >
      
        <ResultList xdata={
          search ?
          SearchSimilar({search : search, data : data}) :
          []} />
        
      </Row>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
        
      }}
    >
      gungbgs @2022
    </Footer>
  </Layout>
  );
}

const getHighScreenSize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  if(width >= height) return width
  return height
}

export default Main