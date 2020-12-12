import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'

const StyledMain = styled.main`
  margin: 56px;
`

const Layout = ({ children }) => {
  const [page, setPage] = useState('homepage')
  return (
    <>
      <Sidebar page={page} onChange={setPage} />
      <StyledMain>
        { children }
      </StyledMain>
    </>
  )
}

export default Layout
