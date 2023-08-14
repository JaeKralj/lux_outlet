'use client'
import ReactSelect from 'react-select'

const customStyles = {
  container: (provided: any, state: any) => ({
    ...provided,
    borderColor: state.isFocused ? '#003399' : '#000000',
    outlineColor: 'transparent',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: '#F2F2F2',
    paddingBlock: '1px',
    borderRadius: '.375rem',
    borderWidth: '1px',
    borderColor: 'transparent',
    outline: 'none',
    '&:hover': { borderColor: '#EAA92A' },
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    display: 'none',
  }),
  indicatorContainer: (provided: any, state: any) => ({
    ...provided,
    '&:hover': { color: '##FF7A00' },
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: '#EAA92A',
    '&:hover': { color: '##FF7A00', fill: '#FF7A00' },
    fill: '#EAA92A',
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: '#EAA92A',
  }),
  menu: (provided: any, _: any) => ({
    ...provided,
    backgroundColor: '#F2F2F2',
    zIndex: '100000',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#FF7A00',
    },
    fontSize: '.75rem',
    borderWidth: '.625rem',
    borderColor: 'transparent',
    marginBottom: '.5313rem',
    backgroundColor: state.isSelected ? '#EAA92A' : provided.backgroundColor,
    color: state.isSelected ? '#ffffff' : '#000000',
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    color: '#EAA92A',
  }),
}
export default function Select(props: any) {
  // @ts-ignore
  return (
    <ReactSelect
      isSearchable={false}
      name={props.name}
      options={props.options}
      onChange={props.handleChange}
      styles={customStyles}
      noOptionsMessage={props.noOptionsMessage}
      defaultValue={props.defaultValue && props.defaultValue}
      placeholder={props.placeholder}
    />
  )
}
