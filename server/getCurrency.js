import config from './config.js'
import fetch from 'node-fetch'
const { currency: { url, key }} = config

const getCurrency = async (rates) => {
  console.log(
    url+ rates + '&compact=ultra&apiKey=' + key)
  const res = await fetch(
    url+ rates + '&compact=ultra&apiKey=' + key
  )
  return await res.json()
}

export default getCurrency