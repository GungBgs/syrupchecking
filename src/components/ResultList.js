import React from 'react'
import { Avatar, List } from 'antd'
const ResultList = ({ xdata }) => {
    const data = xdata ?? "";
    return (
  <List
    itemLayout="horizontal"
    dataSource={data}
    width={400}
    renderItem={(item) => (
      <List.Item style={{ width: '70vw' }}>
        <List.Item.Meta
          title={<a href="https://ant.design">{item.name}</a>}
          description={
            <span>
              Ukuran : {item.size} <br />
              Referensi : {item.link ? <a href={`http://${item.link}`}>{item.ref ?? '-'} </a> : item.ref ?? '-'}
            </span>
          }
        />
      </List.Item>
    )}
    />
    );
    }
export default ResultList
