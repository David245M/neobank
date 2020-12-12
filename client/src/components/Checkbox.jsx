import React from 'react'
import styled from 'styled-components'

const StyledCheckbox = styled.div`
  color: ${props => props.theme.color.text};
  padding-bottom: 20px;
  input[type=checkbox] {
    /* display: none */
  }

  label {

  }
`

const Checkbox = ({ label, name }) => (
  <StyledCheckbox>
    <input name={name} id={name} type="checkbox" defaultChecked/>
    <label htmlFor={name}> { label }</label>
  </StyledCheckbox>
)

export default Checkbox
