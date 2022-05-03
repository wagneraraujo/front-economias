import React from 'react'
import { Container } from './style'

interface ISelectInputsProps {
  options: {
    value: string | number
    label: string | number
  }[]
  onChange: any
  defaultValue?: string | number
}

const SelectInput: React.FC<ISelectInputsProps> = ({
  options,
  onChange,
  defaultValue,
}) => {
  return (
    <>
      <Container>
        <select name="" id="" onChange={onChange} defaultValue={defaultValue}>
          <option value=""></option>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Container>
    </>
  )
}

export default SelectInput
