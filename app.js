const express = require('express') // 서버 프레임워크
const app = express() // 인스턴스화

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000) // port넘버
// 종료 ctrl + c