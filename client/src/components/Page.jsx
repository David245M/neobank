import styled from 'styled-components'

const Page = styled.div`
  background: ${props => props.theme.color.primary};
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default Page
