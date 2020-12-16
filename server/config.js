const config = {
  port: process.env.PORT || 5000,
  secret: 'coursework',
  currency: {
    key: '6b9d0add6f478167b719',
    url: 'https://free.currconv.com/api/v7/convert?q='
  }

}

export default config