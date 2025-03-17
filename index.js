
const express = require("express");  // imported Express.js framework
const app = express();       // Initialized the express application
const path = require('path');    // Imported path module for handling paths
const fs = require('fs');     // here i imported fs module  for handling the file system operations

app.set('view engine','ejs');     // EJS is set as template/view engine
app.use(express.json());          // middleware to parse JSON data from requests
app.use(express.urlencoded({extended:true}));      // middleware to parse url-encoded data from forms

app.use(express.static(path.join(__dirname,'public')));      // this line serves the static files from public folder


app.get("/",(req,res)=>{                //   route to render the home page
    fs.readdir(`./files`,(err,files)=>{      // reading the list of files in 'files' directory
        res.render("index",{files:files, Document: "Notepad-ToDo"});      // renders the index.ejs and passes the files list
    }) 
})

app.post("/create",(req,res)=>{       // route to create new file based on the user input
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){});   // removes the white spaces and append '.txt' to the file name 
    res.redirect("/");  // redirecting back to the homepage  
})

// starts the express server on port adress 3000
app.listen(3000, ()=>{
    console.log(`http://localhost:3000`);
})