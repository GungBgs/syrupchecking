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
      <List.Item style={{ width: '70vw', background : bgColor(item.status), margin:10 }}>
        <List.Item.Meta
          title={<a href="https://ant.design">{item.name}</a>}
          description={
            <span>
            <i>{item.status == '1' ? 'Boleh Dikonsumsi' : item.status=="-1" ? 'Dianjurkan Tidak dikonsumsi' : ''}</i> <br/>
              Ukuran : {item.size ?? "-"} <br />
              Produsen : {item.prinsipal ?? "-"} <br/>
              Referensi : {item.link ? <a href={`http://${item.link}`}>{item.ref ?? '-'} </a> : item.ref ?? '-'}
            </span>
          }
        />
      </List.Item>
    )}
    />
    );
    }

const bgColor = (status) => {
    switch (status){
        case '1':
            return 'rgba(0,155,0,0.1)'
        case '-1' :
            return 'rgba(155,0,0,0.1)';
        default:
            return 'rgba(0,0,0,0)';
    }
}
export default ResultList
