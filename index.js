const express=require('express');
const path = require('path');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// // Middleware 1

// app.use(function(req,res,next){

//     req.myName =  'Sagar';

//     // console.log("Middleware 1 Called");
//     next();
// });

// //Middleware 2

// app.use(function(req,res,next){

//     console.log("From Middleware 2 : ",req.myName);

//     // console.log("Middleware 2 Called");
//     next();
// });

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

    // console.log("From get route controller : ",request.myName);

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

    // Print 
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);

    //Insert
    contactList.push({
        name: req.body.name,
        phone: req.body.phone
    })
    // Or
    // contactList.push(req.body);


    return res.redirect('back');

});

// for deleting a contact
app.get('/delete-contact/',function(req,res){
    // console.log(req.query);

    // get the query from URL
    let phone = req.query.phone;
    let index=0;

    for(let i of contactList){ 
        if(i.phone == phone){
            break;
        }
        index++;
    }

    // OR

    // let index = contactList.findIndex(contact => contact.phone == phone);

    if(index < contactList.length){
        contactList.splice(index,1);
    }

    return res.redirect('back');
});

app.listen(port,function(err){
    if(err){
        console.log('Not Running due to error:',err);
    }
    else{
        console.log('Running on Port:',port);
    }
});