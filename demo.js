// var fs = require('fs');
// var os = require('os');
// var user = os.uptime()
// console.log(user);

//ADD OR REMOVE FILES
// function fileI(){
//     console.log( "File is created sucessfully")
// }
// fs.appendFile('greeting.txt', 'Hello ' + user.username + '!\n', () => fileI())

//IMPORIING AND EXPORTING IN NODE JS
// const notes = require('./notes.js');
// const age = notes.age
// console.log(age);
// console.log(notes.add(age+5, 6));


//Learing JSON
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
// console.log(jsonObject.name); // Output: John

// const objectToConvert = { name: "Alice", age: 25 };
// const jsonStringified = JSON.stringify(objectToConvert); // Convert object to JSON string
// console.log(jsonStringified); // Output: {"name": "Alice", "age":25}

//Learn To make a Server using Express JS
const express = require('express');
const app = express()
const db =require('./db.js');


app.get('/', function (req, res) {
    res.send('Hello World')
})

// app.get('/chicken', function (req, res) {
//     res.send('Bok Bok Chicken')
// })

// app.get('/idli', function (req, res) {
//     var idli = {
//         name: 'idli',
//         size: 'medium',
//         is_sambar: true,
//         is_chutny: false,
//     }

//     res.send(idli)
// })

app.listen(3000, ()=>{
    console.log('Server is running on port 3000, http://localhost:3000');
})
