import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Paper } from '.'
import {ReactComponent as ChipIcon} from '../icons/chip.svg'

const CardWrapper = styled(Paper)`
  width: 376px;
  height: 231px;
  padding: 25px 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 1.5em;

  div {
    display: flex;
    justify-content:space-between;
    align-items:center;
  }
`
const Balance = styled.p`
  font-size: 1.7em;
  font-weight:bold;
  font-family: 'Open Sans';
  letter-spacing: -1.8px;
  color: ${props => props.theme.color.success};
  text-shadow: 0px 0px 10px rgba(199, 192, 192, 0.623);
`
const Number = styled.p`
  margin-bottom: 10px;
  align-self: center;
  font-family: ${props => props.theme.font.number};
  font-size: 1.08em;
  background: rgba(0,0,0,0.5);
  color:transparent;

  text-shadow: 0px 1px 2px ${props => props.theme.color.text};

  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
`
const Card = ({ number, balance, currency }) => {
  const integer = Math.floor(balance / 100)
  const tail = String(balance).substr(-2)
  const symbol = useCallback(curr => {
    if (curr === 'usd') return '$'
    if (curr === 'uah') return '₴'
    if (curr === 'eur') return '€'
  }, [currency])
  return (
    <CardWrapper>
      <h4>namecard</h4>
      <div>
        <ChipIcon />
        <Balance>{symbol(currency) + integer + '.' + tail}</Balance>
      </div>
      <Number>{number}</Number>
    </CardWrapper>
  )
}

export default Card
export { CardWrapper }