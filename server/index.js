const express = require('express');
const mongoose =  require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Books = require('./modals/Books');


const app = express();



app.use(express.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(cors()); //to comunicate between front end and backend


//database connection
mongoose.connect('mongodb://localhost:27017/assignment');
const db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("Connection to db Succeeded");
});



//to insert data
app.post('/insert', function(req, res) {
    const bookName =  req.body.bookName;
    const authorName = req.body.authorName;
    const bookPrice = req.body.bookPrice;

    const bookDetails = new Books({"bookName":bookName, 
    "bookAuthor": authorName, "bookPrice": bookPrice});

    db.collection('books').insertOne(bookDetails, function(err, collection) {
        if (err) throw err;
        console.log("Record Inserted succeedully");
    });
    return res.send("Data Inserted");

})


//to read data
app.get('/read', function(req, res) {
    Books.find({}, (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});


//to update data
app.put("/update", function(req, res) {
    const newPrice = req.body.newPrice;
    const id = req.body.id;

    try{
        Books.findById(id, (err, updatedPrice) => {
            updatedPrice.bookPrice = newPrice;
            updatedPrice.save();
            res.send("Updated");
        });
    }
    catch(err){
        console.log(err);

    }
});

//delete record
app.delete("/delete/:id", function(req, res) {
    const id = req.params.id;
    Books.findByIdAndRemove(id).exec();
    res.send("Deleted");
})

//to start the server
app.listen(3001, () => {
    console.log("Server has started and running on port 3001");
}) 