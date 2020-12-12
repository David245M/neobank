import styled from 'styled-components'
import { Link as LinkDOM } from 'react-router-dom'

const Link = styled(LinkDOM)`
  font-weight: bold;
  font-size: 13px;
  background: linear-gradient(270deg, #50CAFF 0%, #0478FF 100%);
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
  
  -webkit-text-fill-color: transparent;
`

export default Link
