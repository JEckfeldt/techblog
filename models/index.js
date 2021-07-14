const User = require('./User.js')
const Post = require('./Post.js')
const Comment = require('./Comment.js')

// Users have many posts
User.hasMany(Post, {
  foreignKey: 'uid',
  onDelete: 'CASCADE'
})

// Posts belongTo User
Post.belongsTo(User, {
  foreignKey: 'uid'
})

// Posts hasMany Comment
Post.hasMany(Comment, {
  foreignKey: 'pid',
  onDelete: 'CASCADE'
})

// Comments belongTo Post
Comment.belongsTo(Post, {
  foreignKey: 'pid'
})

// User hasMany Comment
User.hasMany(Comment, {
  foreignKey: 'uid',
  onDelete: 'CASCADE'
})

// Comments belongTo User
Comment.belongsTo(User, {
  foreignKey: 'uid'
})

module.exports = { User, Post, Comment }