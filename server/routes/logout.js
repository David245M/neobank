
const logout = (req, res) => {
  return res.clearCookie('jwt').send('')
}

export default logout