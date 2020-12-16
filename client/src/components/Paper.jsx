import React from 'react'
import styled from 'styled-components'

const StyledPaper = styled.div`
  ${props => props.$style ?? {}}
  background: ${props => props.theme.color.primary};
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow.default};

  display: flex;
  flex-direction: column;
`

const Paper = ({ children, style, ...props }) => (
  <StyledPaper $style={style} {...props}>
    { children }
  </StyledPaper>
)

export default Paper
