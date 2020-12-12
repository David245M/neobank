import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
  font-size: 13px;

  label {
    padding-bottom: 8px;
  }

  input {
    border-radius: 10px;
    padding: 10px 20px;
    border: 1px solid;
    border-color: unset;
    border-image: linear-gradient(122.51deg, rgba(214, 227, 243, 0.5) 16.62%, rgba(255, 255, 255, 0.5) 56.74%);
    
    color: inherit;
    font-weight: 400;

    background: ${props => props.theme.color.primary};
    box-shadow: inset -10px -10px 14px rgba(255, 255, 255, 0.6), 
                inset 10px 10px 14px #C5D7EE;

    ::placeholder {
      color: ${props => props.theme.color.text};
    }
  }
`

const Input = ({ label, ...props }) => {
  return (
    <StyledInput>
      <label>{ label }</label>
      <input {...props}/>
    </StyledInput>
  )
}

const Password = props => (
  <Input type="password" {...props} />
)

const Email = props => (
  <Input type="email" {...props} />
)

export default Input
export { Password, Email }