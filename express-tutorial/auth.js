const auth = (req, res, next) => {
  const {user} = req.query;
  if(user === 'paddy'){
    req.user = {name: 'Paddy', id:3}
    next()
  }
  else{
    res.status(401).send('Unauthorized')
  }
  // console.log('Authorized!!')
  // next()
}

module.exports = auth