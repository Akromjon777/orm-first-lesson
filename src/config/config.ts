import {DataSource} from 'typeorm'
import  path from 'path'

export default  new DataSource({
  type:"postgres",
  host:"localhost", 
  port:5432,
  username:"postgres",
  password:"12060501",
  database:"orm",
  entities:[
    path.join(__dirname, '..', 'entities', '*.entities.{ts,js}')
  ],
  logging:true,
  synchronize:true
})

