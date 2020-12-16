import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 0;
  padding: 8px;
  border-radius: ${props => props.theme.radius};

  color: ${props => props.primary ? 'white' : props.theme.color.text};
  font-weight: 800;
  font-size: 1em;

  transition: box-shadow .155s linear;
  box-shadow: 4px 4px 20px 0px #6F8CB0, -6px -6px 20px 0px #FFFFFF, 2px 2px 4px 0px #728EAB;
  background: ${props => props.primary ? 
    'linear-gradient(90deg, #50CAFF 0%, #0478FF 100%)' :
    '#E3EDF7'
  };

  &:hover {
    box-shadow: 4px 4px 20px 0px #8ba1bb, -6px -6px 20px 0px #FFFFFF, 2px 2px 4px 0px #728EAB;
  }

  &:active {
    box-shadow: none;
  }

`

const Button = props => (
  <StyledButton {...props} />
)

export default Button
