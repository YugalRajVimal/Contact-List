const express=require('express');
const path = require('path');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/',function(request,response){
    // console.log(request)
    // console.log(__dirname)
    // response.send('<h1>Cool, it is running!</h1>');
    return response.render('home',{ title : "Contact List"});
});

app.get('/practice',function(request,response){
    return response.render('practice',{
        title : "Play-EJS"
    });
});

app.listen(port,function(err){
    if(err){
        console.log('Not Running due to error:',err);
    }
    else{
        console.log('Running on Port:',port);
    }
});