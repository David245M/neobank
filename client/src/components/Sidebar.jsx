import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Paper, IconButton, Link } from './'
import { ReactComponent as HomeIcon } from '../icons/home.svg'
import { ReactComponent as ChartIcon } from '../icons/chart.svg'
import { ReactComponent as DollarIcon } from '../icons/dollar.svg'
import { ReactComponent as LetterIcon } from '../icons/letter.svg'
import { ReactComponent as SettingsIcon } from '../icons/settings.svg'

const StyledSidebar = styled(Paper)`
  left:0;
  position: absolute;

  width:150px;
  height: 100vh;
  padding: 40px;
  border-top-left-radius:0;
  border-bottom-left-radius:0;

  display: flex;
  justify-content: center;
  align-items: center;
`
const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 4vh;
  justify-items: center;

`
const SettingsLink = styled(Link)`
  position: absolute;
  bottom: 40px;
`

const Sidebar = () => {
  const location = useLocation()
  const [page, setPage] = useState(location.pathname)
  return (
    <StyledSidebar>
      <Nav>
        <Link to="/home">
          <IconButton>
              <HomeIcon/> 
          </IconButton>
        </Link>
        <Link to="/history">
          <IconButton>
            <ChartIcon/>
          </IconButton>
        </Link>
        <IconButton >
          <DollarIcon/>
        </IconButton>
        <Link  to="/create">
          <IconButton>
            <LetterIcon/>
          </IconButton>
        </Link>
      </Nav>
      <SettingsLink to="/settings">
        <IconButton>
          <SettingsIcon/>
        </IconButton>
      </SettingsLink>
    </StyledSidebar>
  )
}

export default Sidebar
