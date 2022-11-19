import React, { useEffect, useState } from 'react'
import { Breadcrumb, Layout, Menu, Row } from 'antd'
import SearchField from './../components/SearchField'
import ResultList from '../components/ResultList'

import SearchSimilar from '../components/atoms/SearchSimilar'
import GetData from './../models/data/index'
import Title from 'antd/es/typography/Title'
import AdsBanner from './../components/AdsBanner'
import Paragraph from 'antd/es/typography/Paragraph'
const { Footer, Content } = Layout

function Main() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [used, setUsed] = useState(0)
  const [refresh, setRefresh] = useState(false)

  const funSetSearch = (value) => {
    setSearch(value)
    setUsed(used + 1)
    if (used > 10) {
      setRefresh(true)
    }
  }
  useEffect(() => {
    GetData.then((v) => {
      setData(v)
      console.log(data)
    })
  }, [])

  return (
    <Layout
      className="layout"
      style={{
        minHeight: '100vh',
        height: 'auto',
      }}>
      <Content
        style={{
          padding: '0 50px',
        }}>
        <Row justify="center" align="center" style={{ margin: 40 }}>
          <Title style={{ fontSize: getHighScreenSize() / 20, textAlign: 'center' }}>Syrup Checking</Title>
        </Row>
        <Row justify="center" align="center" style={{ marginTop: 40 }}>
         <Title level={5} italic={true} style={{ color: 'rgb(100,100,100)' }}>
            update terakhir : 17 November 2022
          </Title>
        </Row>
        <Row justify="center" align="center" style={{ marginBottom: 40 }}>
          <SearchField eventOnChange={funSetSearch} eventOnSelect={funSetSearch} data={data} />
        </Row>
        <Row justify="center">
          {search != '' ? (
            <ResultList xdata={search ? SearchSimilar({ search: search, data: data }) : []} />
          ) : (
            <Title level={5} color="rgba(0,255,0,0.2)">
              Masukkan sirup yg ingin dicek, di kolom diatas.
            </Title>
          )}
        </Row>
        {refresh ? (
          <Row justify={'center'}>
            <AdsBanner />
          </Row>
        ) : (
          <></>
        )}
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}>
        gungbgs @2022
      </Footer>
    </Layout>
  )
}

const getHighScreenSize = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  if (width >= height) return width
  return height
}

export default Main
