import express, {Application} from 'express'
import dataSource from './config/config'
import routes from './routes/routes'

const app:Application = express()


dataSource
  .initialize()
  .then(():void => console.log('Connected'))
  .catch((err:unknown):void => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(routes)



app.listen(3000, () =>{
    console.log('Server listening on port:3000');
    
})