import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 3em; 
  background-color: ${props => props.theme.color.shadow};
  color: transparent;
  text-shadow: ${props => props.theme.shadow.text + ' ' + props.theme.color.text};
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
`

const Title = props => ( <StyledTitle {...props}/>)

export default Title
