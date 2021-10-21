// 5 steps to express jS

const express = require("express"); 
var cors = require('cors');
const app = express(); 
const port = 5000; 

app.use(cors());
// string data convert to json 
app.use(express.json())

app.get("/", (req, res) => {
  res.send("I am learning Node and express and mongo");
});
const users = [
    {id: 1,name: 'Rakibul Alam', email: 'rakibul9200@gmail.com',address: 'Dhaka',phone: '01685859200'},
    {id: 2,name: 'Atiqul Taki', email: 'atiq@gmail.com',address: 'Bogura',phone: '01987876544'},
    {id: 3,name: 'Khaled Mahmud', email: 'khaled@gmail.com',address: 'B. Baria',phone: '01785859200'},
    {id: 4,name: 'Younus', email: 'Younus@gmail.com',address: 'Noakhali',phone: '01985859200'},
    {id: 5,name: 'Rahat', email: 'rahat@gmail.com',address: 'Dhaka',phone: '01785859200'},
    {id: 6,name: 'Tagin', email: 'tagin@gmail.com',address: 'Kamal',phone: '01885859200'},
]

// use serach query 
app.get('/users',(req,res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }else{
        res.send(users);
    }
})
// get the whole array as request 
app.get('/users',(req,res)=>{
    res.send(users);
})

// app.Method 
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    console.log('hitting the post',req.body);
    //res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// Dyanmic value get api 
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id-1];
    res.send(user);
})
app.listen(port, () => {
  console.log("Lising to Port ", port);
});
