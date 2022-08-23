import { Sequelize } from 'sequelize'

const db = new Sequelize('restAPI_db', 'root', 'tsaandroid', {
  host: 'localhost',
  dialect: 'mysql'
})

export default db
