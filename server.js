const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const users = [];

app.get('/users', (req, res) => {
    console.log('GET Users', req.body);
    // res.send(users);
    res.status(200).json({
      data: "Get All User API called...!"
    })
});

app.post("/user", (req, res) => {
    console.log('POST Users', req.body);
    users.push(req.body);
    res.send();
});

app.get("/user/:index", (req, res)=> {
    console.log('GET User with Index', req.params, req.body);
    if(users.length > req.params.index){
        res.send(users[req.params.index]);
    }else{
        res.send("Invalid index");
    }
})

app.delete("/user/:index", (req, res) => {
    console.log('GET User with Index', req.params, req.body);
    if(users.length > req.params.index){
        delete users[req.params.index];
        res.send();
    }else{
        res.send("Invalid index");
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))