import React, { useState } from 'react'
import { AutoComplete } from 'antd'
import SearchSimilar from './atoms/SearchSimilar';

const SearchField = ({ eventOnSelect, eventOnChange, data }) => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState([])
  const onSearch = (searchText) => {
    setOptions(!searchText ? [] : getNameData(SearchSimilar({search : searchText ?? '', data: data})))
  }
  const onSelect = (data) => {
      const selected = data.slice(0, data.indexOf(' *#'))
      console.log('onSelect', selected)
      setValue(selected)
    eventOnSelect(selected)
  }
  const onChange = (data) => {
    setValue(data)
    eventOnChange(data)
  }
  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: '70vw',
        }}
        onSelect={onSelect}
        onChange={onChange}
        onSearch={onSearch}
        value = {value}
        placeholder="Masukkan syrup yg ingin dicek"
      />
      <br />
      <br />
    </>
  )
}

const getNameData = (datas) => {
    let counter = 0;
    const data = datas.map((item) => {
        counter++;
        return {
        label : item.name,
        value : `${item.name} *#${counter}`,
    }}).slice(0,7);
    return data;
}

export default SearchField
