require('../../models/User')

module.exports = (app, passport) => {
  app.post('/api/signup', passport.authenticate('local-signup'), (req, res) =>
    res.status(200).json({
      message: 'Signup successful',
      data: req.user
    }))

  app.post('/api/login', passport.authenticate('local-login'), (req, res) =>
    res.status(200).json({
      message: 'Login successful',
      data: req.user
    }))

  app.get('/api/login', (req, res, next) => {
    passport.authenticate('local-login', (err, user, info) => {
      if (err) {
        return next(err)
      }

      if (!user) {
        return res.status(200).json({
          message: info.message
        })
      }

      req.logIn(user, (err) => {
        if (err) {
          return next(err)
        }

        return res.status(200).json({
          message: info && info.message,
          data: user
        })
      })
    })(req, res, next)
  })

  app.get('/api/get_user', (req, res) =>
    res.status(200).json({
      message: req.user ? 'User session exists' : 'User session does not exist',
      data: req.user
    })
  )

  app.get('/api/logout', (req, res) => {
    req.logout()
    return res.status(200).json({
      message: 'Logout successful'
    })
  })
}
