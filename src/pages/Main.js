import React, { useState } from 'react'
import { Breadcrumb, Layout, Menu, Row } from 'antd';
import SearchField from './../components/SearchField';
import ResultList from '../components/ResultList';
import data from './../models/data/index';
import SearchSimilar from './../components/SearchSimilar';
const { Footer, Content } = Layout;

function Main() {
  const [search, setSearch] = useState('');

  return (
    <Layout className="layout" style={{
      height : '100vh'
    }}>
    
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Row justify="center" align="center" style={{margin : 40}}>
      <SearchField eventOnChange={setSearch} eventOnSelect={setSearch}/> 
      </Row>
      <Row justify='center' >
      {/* {console.log(SearchSimilar({search : search, data : data}))} */}
        <ResultList xdata={SearchSimilar({search : search, data : data})} />
        {/* <ResultList xdata={data} /> */}
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

export default Main