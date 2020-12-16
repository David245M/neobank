import React, { useState } from 'react'
import useLazyHttp from '../hooks/useLazyHttp'
import styled from 'styled-components'

const StyledSelect = styled.div`
  padding: 10px 0;
  select {
    border:0;
    border-radius:10px;
    min-width: 200px;
    padding: 10px 20px;
    box-shadow : ${props => props.theme.shadow.default};
    color: ${props => props.theme.color.text};
    width: 100%;
    background: transparent;
  }
  label {
    display: block;
    margin-bottom:10px;
  }
`

const Select = ({ options = [], label, ...rest }) => {
  return (
    <StyledSelect {...rest}>
      <label>{ label }</label>
      <select>
        {options.map(curr => (
          <option>
            {curr}
          </option>
        ))}
      </select>
    </StyledSelect>
  )
}

export default Select
