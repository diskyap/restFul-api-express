import { Sequelize } from 'sequelize'
import db from '../config/db.js'

const { DataTypes } = Sequelize

const User = db.define(
  'users',
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

User.removeAttribute('id')

export default User
;(async () => {
  await db.sync()
})()
