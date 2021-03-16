let express = require('express');
const fs = require("fs");
let server = express();

server.get('popup.html', function (req, res) {
    let ex1 = req.params("email");
    console.log(ex1);
});