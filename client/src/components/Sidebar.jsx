import React from 'react'
import { Paper, IconButton, Link } from './'
import { ReactComponent as HomeIcon } from '../icons/home.svg'
import { ReactComponent as ChartIcon } from '../icons/chart.svg'
import { ReactComponent as DollarIcon } from '../icons/dollar.svg'
import { ReactComponent as LetterIcon } from '../icons/letter.svg'
import { ReactComponent as SettingsIcon } from '../icons/settings.svg'
import styled from 'styled-components'

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  row-gap: 4vh;  
`

const Sidebar = ({ page, onChange }) => {
  return (
    <Paper
    style={{
        left:0,
        position: 'fixed',

        width: 150,
        height: '100vh',
        padding: 40,
        boxSizing: 'padding-box',
               
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }}
    >
      <Nav>
        <Link to="/home">
          <IconButton>
              <HomeIcon/> 
          </IconButton>
        </Link>
        <Link to="/transactions">
          <IconButton>
            <ChartIcon/>
          </IconButton>
        </Link>
        <IconButton>
          <DollarIcon/>
        </IconButton>
        <IconButton>
          <LetterIcon/>
        </IconButton>
      </Nav>
      <Link to="/settings">
        <IconButton>
          <SettingsIcon/>
        </IconButton>
      </Link>
    </Paper>
  )
}

export default Sidebar
