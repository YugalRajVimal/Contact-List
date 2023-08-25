const express=require('express');
const path = require('path');
const port=8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

/*

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

*/

app.get('/practice',function(request,response){
    return response.render('practice',{
        title : "Play EJS"
    });
});

app.get('/',async function(request,response){

    try {
        let contact = await Contact.find({});
        return response.render('home',{
            title: "Contact List",
            contact_list: contact
        });
    } catch (error) {
        console.log("Error in fetching contacts from DB",error);
        return;
    }
    // return response.render('home',{
    //     title: "Contact List",
    //     contact_list: contactList
    // });
    
});


app.post('/create_contact',async function(req,res){

    try {
        let cont = await Contact.insertMany(
            {
                name:req.body.name,
                phone:req.body.phone
            }
        );
        return res.redirect('/');
    } catch (error) {
        console.log("Error in adding contacts in DB");
        return;
    }


    // contactList.push(req.body);
    // return res.redirect('/');

});

app.post('/find_contact',async function(req,res){

    try {
        let contact = await Contact.find({phone : req.body.name_num});
        return res.render('home',{
            title: "Contact List",
            contact_list: contact
        });
    } catch (error) {
        console.log("Error in filtering contacts from DB",error);
        return;
    }

});

async function end_filter(){
    
}

app.listen(port,function(err){
    if(err){
        console.log('Not Running due to error:',err);
    }
        console.log('Running on Port:',port);
});

// for deleting a contact
app.get('/delete-contact',async function(req,res){

        try {
            let id = req.query.id;
            await Contact.deleteOne({_id : id});
            return res.redirect('/');
        } catch (error) {
            console.log("Error in deleting contacts from DB");
            return;
        }



        // console.log(req.query);
        // let phone = req.query.phone
    
        // let contactindex = contactList.findIndex(contact => contact.phone == phone);
    
        // if(contactindex != -1){
        //     contactList.splice(contactindex, 1);
        // }
    
        // return res.redirect('back');

});

