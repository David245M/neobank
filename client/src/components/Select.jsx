import React, { useState } from 'react'
import useLazyHttp from '../hooks/useLazyHttp'
import styled from 'styled-components'

const StyledSelect = styled.select`
  border:0;
  border-radius:10px;
  min-width: 200px;
  padding: 10px 20px;
  box-shadow : ${props => props.theme.shadow.default};

  option {
    border: 0;
    /* padding: 10px 20px;     */
  }
`

const Select = ({ options = [], ...rest }) => {
  return (
    <StyledSelect {...rest}>
      {options.map(curr => (
        <option>
          {curr}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Select
