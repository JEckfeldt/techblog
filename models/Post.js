const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }

Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING
  }
},
  {
    sequelize,
    modelName: 'posts',
    timeStamps: true
  })

module.exports = Post