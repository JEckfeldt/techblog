// check out 07-day-04
require('dotenv').config()

const { join } = require('path')
const express = require('express')
const passport = require('passport')
const { User, Post, Comment } = require('./models')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
// handlebars reqs
const exphbs = require('express-handlebars')
const hbs = exphbs.create({})

// set up express
const app = express()
const PORT = process.env.PORT || 3000

// set up handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// PASSPORT
app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

// Importante! for user auth
passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findOne({ id })
    .then(user => done(null, user))
    .catch(err => done(err, null))
})

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findOne({ where: { id }, include: [Post] })
  .then(user => cb(null, user))
  .catch(err => cb(err, null)))
)
// END PASSPORT

// Routes stuff
app.use(require('./controllers'))

require('./db')
  .sync()
  .then(() => app.listen(PORT))
  .catch(err => console.log(err))