const express=require('express');
const path = require('path');
const port=8000;

// Error
    //For Mongoose
    // const db = require('./config/mongoose')
    // const Contact = require('./models/contact')

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

app.get('/practice',function(request,response){
    return response.render('practice',{
        title : "Play EJS"
    });
});

app.get('/',/* async */ function(request,response){

    // console.log("From get route controller : ",request.myName);

    // console.log(request)
    // console.log(__dirname)
    // response.send('<h1>Cool, it is running!</h1>');

    return response.render('home',{
        title: "Contact List",
        contact_list: contactList
    });

    // Error
        //Fetch the contact from Studio3T DB
        // try {
        //     let contacts = await  Contact.find({});
        //     console.log("Contacts fetched from DB");
        //     return response.render('home',{ 
        //         title : "Contact List",
        //         contact_list : contactList
        //     });
        // } catch (error) {
        //     console.log('Error in fetching contacts from DB',error);
        //     return;
        // }
   
    
});


app.post('/create_contact', /* async */ function(req,res){
    // return res.redirect('practice');

    // Print 
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);

    //Insert
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // })

    // Or
    // contactList.push(req.body);

    contactList.push(req.body);
    return res.redirect('/');

    //Error
        // try {
        //     let contact = await Contact.create({
        //         name:req.body.name,
        //         phone:req.body.phone
        //     })
        //     console.log("Contact Created ",contact);
        //     return res.redirect('back');
        // } catch (error) {
        //     console.log('Error in creating a contact',error);
        //     return res.redirect('back');
        // }

    // function(err,newContact){
    //     if(err){
    //         console.log('Error in creating a contact');
    //         return;
    //     }
    //         console.log('*********',newContact);
    //         return res.redirect('back');
    // }

    

    // return res.redirect('back');

});

app.listen(port,function(err){
    if(err){
        console.log('Not Running due to error:',err);
    }
        console.log('Running on Port:',port);
});

// for deleting a contact
app.get('/delete-contact', /* async */ function(req,res){

    // Error
        // try {
        //     //get the id from ul by the query
        //     //Find the contact in the DB using id and delete it 
        //     let contact =await Contact.findByIdAndDelete(req.query.id);

        //     console.log("Contact deleted");
        //     return res.redirect('back');
        // } catch (error) {
        //     console.log('Error in deleting a contact from DB',error);
        //     return res.redirect('back');
        // }


        console.log(req.query);
        let phone = req.query.phone
    
        let contactindex = contactList.findIndex(contact => contact.phone == phone);
    
        if(contactindex != -1){
            contactList.splice(contactindex, 1);
        }
    
        return res.redirect('back');


    // console.log(req.query);

    // // get the query from URL
    // let phone = req.query.phone;
    // // let index=0;

    // // for(let i of contactList){ 
    // //     if(i.phone == phone){
    // //         break;
    // //     }
    // //     index++;
    // // }

    // // OR

    // let index = contactList.findIndex(contact => contact.phone == phone);

    // if(index != -1){
    //     contactList.splice(index,1);
    // }

    // return res.redirect('back');
});

