import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LoadingIcon } from '../icons/loading.svg'

const LoadingWrapper = styled.div`
  position: absolute;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  left:0;
  top:0;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height:100px;
    animation: load 1.1s infinite linear;

    @keyframes load {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }
  }
`

const Loading = (props) => (
  <LoadingWrapper {...props}>
    <LoadingIcon />
  </LoadingWrapper>
)

export default Loading
