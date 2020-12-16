
const logout = (req, res) => {
  return res.clearCookie('jwt').status(200).send('')
}

export default logout