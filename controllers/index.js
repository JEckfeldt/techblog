const router = require('express').Router()

router.use('/api', require('./user-routes.js'))
router.use('/api', require('./post-routes.js'))
router.use('/api', require('./comment-routes.js'))

router.use('/', require('./view-routes.js'))

module.exports = router