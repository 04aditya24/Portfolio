const express=require('express');
const app =express();
const mongoose=require('mongoose');
const bodyParser=require("body-parser"); 
const ejs=require("ejs");
const path=require('path');

app.set('view engine','ejs');

app.use(express.static(__dirname+'/public'));

app.set('views', path.join(__dirname, 'views'));
// ROUTES

app.get('/',function(req,res){
                    res.render("home");
});



let port =process.env.PORT;
if(port==null || port == ""){
                    port=8000;
}
app.listen(port);
console.log("server set at 8000");
