const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')
// static file serving
app.use(express.static(__dirname+'/public')) // __dirname 현재 경로

app.get('/', (req, res) => {
    res.render('index'); // .ejs생략가능
})

app.get('/blog', (req, res) => {
    res.render('blog');
})

app.get('/users', (req, res) => {
    res.render('users');
})

app.listen(port, () => {
    console.log(`Node Legacy App listening on port ${port}`)
})