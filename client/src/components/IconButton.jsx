import React from 'react'
import styled from 'styled-components'

const StyledIconButton = styled.button`
  width: 64px;
  height: 64px;
  border:0;
  border-radius: 10px;

  display: flex;
  place-content: center;
  place-items: center;

  cursor: pointer;

  background: ${props => props.theme.color.primary};
  box-shadow: ${props => props.theme.shadow.default};
`

const IconButton = props => <StyledIconButton {...props} />

export default IconButton