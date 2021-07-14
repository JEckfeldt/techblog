const router = require('express').Router()

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/register', (req, res) => {
  res.render('register')
})

// comment
router.get('/posts/:id', (req, res) => {
  res.render('comment', { cid: req.params.id })
})

router.get('/edit/:id', (req, res) => {
  res.render('edit', { cid: req.params.id })
})

router.get('/dashboard', (req, res) => {
  res.render('all')
})

router.get('/*', (req, res) => {
  res.render('home')
})

module.exports = router