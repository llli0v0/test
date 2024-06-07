// 引入express模块
const express = require('express');

// 创建一个express应用
const app = express();

// 定义一个路由，处理根URL的GET请求
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 让应用监听3000端口
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});