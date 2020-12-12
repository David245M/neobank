import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 3em; 
  background-color: #6d7a88;
  color: transparent;
  text-shadow: 0px 2px 2px ${props => props.theme.color.text};
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
`

const Title = props => ( <StyledTitle {...props}/>)

export default Title
