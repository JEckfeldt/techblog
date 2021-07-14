const router = require('express').Router()
const { Post, Comment, User } = require('../models')
const passport = require('passport')

router.get('/comments', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user.comments) // gets all comments of the user
})

router.post('/comments', passport.authenticate('jwt'), (req, res) => Comment.create({
  text: req.body.text,
  pid: req.body.pid,
  uid: req.user.id
})
.then(comment => res.json(comment))
.catch(err => console.log(err))
)

router.get('/comments/:id', passport.authenticate('jwt'), (req, res) => {
  Comment.findOne({ where: { id: req.params.id } })
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json(err))
})

router.delete('/comments/:id', passport.authenticate('jwt'), (req, res) => {
  Comment.destroy(
    { where: { id: req.params.id } }
    )
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).json(err))
})

module.exports = router