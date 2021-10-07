const express = require('express');
//const mysql = require('mysql');
const dovenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

const {MongoClient} = require('mongodb');

const app = express();
const port = process.env.PORT || 5000; //Line 3
//const table ='users';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))


const blogSchema=new mongoose.Schema({
  email:  String, 
  password: String
});

const questionSchema=new mongoose.Schema({
  quizName: String,
  questionNum: String, 
  answer: String
});
const Blog =mongoose.model('Blog', blogSchema);

const Question =mongoose.model('Question', questionSchema);
    
async function main() {
  // we'll add code here soon
  //mongodb://localhost:27017
  const uri = process.env.DBURI
  //const client = new MongoClient(uri);
  try {
    await mongoose.connect(uri);
    //var user = new Blog({ email: 'blah@gmail.com', password:'1' });
    //await user.save()
    //user = new Blog({ email: 'blah2@gmail.com', password:'2' });
    //await user.save()

    //var user = new Question({ quizName: 'Quiz1', questionNum:'1', answer:'A' });
    //await user.save()
    //user = new Question({ quizName: 'Quiz1', questionNum:'2', answer:'B' });
    //await user.save()
    const query  = Blog.where({ email: 'blah@gmail.com', password: '1' });
    query.findOne(function (err, blog) {
    if (err) {
      //console.log("Err");
      return handleError(err);
    }
    if (blog) {
      // doc may be null if no document matched
      console.log(blog)
    }
    });
    
    
  } catch (e) {
      console.error(e);
  }
    //finally {
    //  await mongoose.close();
   // }
}
main().catch(console.error);


app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

const message = "Hello";
app.get('/employeelogin', (req, res) => {
  console.log("eeee");
      res.send(message);
      return
});

app.get('/login', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  return
});

app.get('/another', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  return
});

app.get('/auth/google',
  passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));

app.post('/auth/google2', (req, res) => { //Line 9
  try {
    console.log(req.body.email)
    //var user = new Blog({ email: 'blah@gmail.com', password:'1' });
    //await user.save()
    //user = new Blog({ email: 'blah2@gmail.com', password:'2' });
    //await user.save()
    const query  = Blog.where({ email: req.body.email, password: req.body.password });
    query.findOne(function (err, blog) {
    if (err) {
        console.log(err);
    }
    if (blog) {
      // doc may be null if no document matched
      console.log(blog);
      res.redirect('/quiz')
      return;
    }
    else{
      res.redirect('/')
      return;
    }

    });
  } catch (e) {
    console.error(e);
  }
});


app.post('/quizAnswers1', (req, res) => { //Line 9
  console.log(req.body.name)
  const query  = Question.where({ quizName: req.body.name, questionNum:req.body.questionNum, answer:req.body.answer });
  query.findOne(function (err, blog) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
  }
  if (blog) {
    // doc may be null if no document matched
    console.log(blog);
  }
  res.redirect('/')
  return
  })
});
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
    return
  });