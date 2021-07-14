const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Comment extends Model { }

Comment.init({
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    sequelize,
    modelName: 'comments',
    timeStamps: true
  })

module.exports = Comment