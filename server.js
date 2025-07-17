const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const port = 5000;

app.get('/', (req, res) => {
    console.log('client is calling a API');
    res.send('Hello World!')
})


app.get('/khiem', (req, res) => {
    console.log('client is calling a API');
    res.json({
        message: 'hello world1'
    })
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.json({
            message: "email or password is required"
        })
    }

    if(Number(password) === 123456) {
        return res.json({
            massage: "login success"
        })
    }

    return res.json({
        massage: "Login fail"
    })
    
    console.log(email, password);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
