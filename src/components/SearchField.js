import React, { useState } from 'react'
import { AutoComplete } from 'antd'
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
})
const SearchField = ({ eventOnSelect, eventOnChange }) => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState([])
  const onSearch = (searchText) => {
    setOptions(!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)])
  }
  const onSelect = (data) => {
    console.log('onSelect', data)
    eventOnSelect(data)
  }
  const onChange = (data) => {
    // console.log('onchange', data)
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
        placeholder="input here"
      />
      <br />
      <br />
    </>
  )
}

export default SearchField
