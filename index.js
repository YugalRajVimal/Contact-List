const express=require('express');
const path = require('path');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

var contactList = [
    {
        name:"Arpan",
        phone:"1111111111"
    },
    {
        name:"Tony Stark",
        phone:"2222222222"
    },
    {
        name:"Abcd",
        phone:"3333333333"
    },
    {
        name:"Xyz",
        phone:"4444444444"
    }
]


app.get('/',function(request,response){
    // console.log(request)
    // console.log(__dirname)
    // response.send('<h1>Cool, it is running!</h1>');
    return response.render('home',{ 
        title : "Contact List",
        contact_list : contactList
    });
});

app.get('/practice',function(request,response){
    return response.render('practice',{
        title : "Play EJS"
    });
});

app.post('/add_contact',function(req,res){
    // return res.redirect('practice');
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.phone);
});

app.listen(port,function(err){
    if(err){
        console.log('Not Running due to error:',err);
    }
    else{
        console.log('Running on Port:',port);
    }
});