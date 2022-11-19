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
    console.log('onSelect', data)
    eventOnSelect(data)
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
        placeholder="Masukkan syrup yg ingin dicek"
      />
      <br />
      <br />
    </>
  )
}

const getNameData = (datas) => {
    return datas.map((item) => ({value : item.name})).slice(0,7);
}

export default SearchField
