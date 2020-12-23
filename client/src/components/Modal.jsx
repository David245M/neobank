import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width:100vw;
  height:100vh;
  z-index: 9999;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  
  display: flex;
  place-items: center;
  place-content: center;
`
const Inner = styled.div`
  padding: 40px;
  min-height: 100px;
  width: clamp(200px, 20%, 600px);
  background: white;
  border-radius: 10px;

  display: flex;
  flex-direction:column;
  align-items:center;
`

const Modal = ({ children, open, setOpen }) => {
  const wrapperRef = useRef()
  const innerRef = useRef()
  
  const handleClick = e => {
    if(wrapperRef.current?.contains(e.target)){
        if (!innerRef.current?.contains(e.target)) {
          setOpen(false)
        }
    } 
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  })

  return open ? (
    <Wrapper ref={wrapperRef}>
      <Inner ref={innerRef}>
        { children }
      </Inner>
    </Wrapper>
  ) : null
}

export default Modal
