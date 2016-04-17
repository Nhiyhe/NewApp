/// <reference path="typings/express/express.d.ts" />

var express = require('express');
var PORT = process.env.PORT || 3000;

var app = express();

app.get('/', (request,response) =>{
    response.send("Hello");
})


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})