const express = require('express');
const app = express();
const login= require('./services/loginService');
var cors = require('cors')
const bodyparser= require('body-parser');

const port = 3000

app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/login',(req,res)=>{
    console.log(req.body);
    login.loginUser(req.body.username,req.body.password).then((data)=>{
        console.log(data);
        res.send(data);
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})