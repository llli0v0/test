const express = require('express');
const fs = require('fs');

const filePath = './data.json';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
  }
  let preData = fs.readFileSync(filePath, 'utf8');
  if (preData === '') preData = '[]';
  preData = JSON.parse(preData);
  preData = preData.concat(req.body);
  fs.writeFileSync(filePath, JSON.stringify(preData));
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});