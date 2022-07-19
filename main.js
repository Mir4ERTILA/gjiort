import express from 'express'
import cors from 'cors'
import { nanoid } from 'nanoid'
import { engine } from 'express-handlebars'

const app = express()
app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log('Working...');
})