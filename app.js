const express = require('express') // 서버 프레임워크
const app = express() // 인스턴스화
const port = 3000

// 라우터 함수
app.get('/', (req, res) => {
    console.log('Got a GET request from Client')
    res.send('Got a response from Server')
})// 브라우저에서는 get요청만 됨

app.post('/', (req, res) => {
    console.log('Got a POST request from Client')
    res.send('Got a response from Server')
})// curl -X POST localhost:3000/user

app.put('/user', (req, res) => {
    console.log('Got a PUT request from Client')
    res.send('Got a response from Server')
})

app.delete('/user', (req, res) => {
    console.log('Got a DELETE request from Client')
    res.send('Got a response from Server')
})

// 
app.listen(port, () => {
    console.log(`Node Legacy App listening on port ${port}`)
}) // port넘버
// 종료 ctrl + c