console.log("Library App Port No. :- 9999");

const express = require("express");
const app = new express();
const port = process.env.PORT || 9999;

// declare nav-array globally
const nav = [
    // {
    //     link : "/home",
    //     name : "Home"
    // },
    {
        link : "/books",
        name : "Books"
    },
    {
        link : "/authors",
        name : "Authors"
    },
    {
        link : "/admin/addbook",
        name : "AddBook"
    },
    {
        link : "/signup",
        name : "SignUp/LogIn"
    },
    {
        link : "/",
        name : "LogOut"
    }
]

// imports Routers
const booksRouter =  require("./src/routes/booksRouter")(nav);
const authorsRouter = require("./src/routes/authorsRouter")(nav);
const signupRouter = require("./src/routes/signupRouter")(nav);
const loginRouter = require("./src/routes/loginRouter")(nav);
const adminRouter = require("./src/routes/adminRouter")(nav);

// static files
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
// ejs template engine
app.set("view engine","ejs");
// set initial path
app.set("views","./src/views");
// router
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/signup",signupRouter);
app.use("/login",loginRouter);
app.use("/admin",adminRouter);

// review array
const reviews = [
    {
        reader : "Arjun",
        rating : "Good",
        img : "readr1.jpeg",
        time : "- 8 hours ago",
        about : "Very helpful app, liked it."
    },
    {
        reader : "Remya",
        rating : "Excellent",
        img : "readr2.jpeg",
        time : "- 5 days ago",
        about : "Very good app, so much helpful.liked the interface"
    },
    {
        reader : "Gokul",
        rating : "Satisfactory",
        img : "readr3.jpeg",
        time : "- last week",
        about : "nice app, Could have added more features."
    }
]

// library page
app.get("/",(req,res)=>{
    res.render("index",
    {
        nav,
        title : "Library App",
        reviews
    });
});

// home page
// app.get("/home",(req,res)=>{
//     res.render("home",{
//         nav,
//         title : "Library",
//         reviews
//     });
// });

// server port
app.listen(port,()=>{
    console.log("Server is ready at " + port);
});
