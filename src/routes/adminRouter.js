const express = require("express");
// router
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');

// router function
function router(nav){

    // add book form page
    adminRouter.get("/addbook",(req,res)=>{
        res.render("addBook",{
            nav,
            title : "Add a Book"
        });
    });

    // add author form page
    adminRouter.get("/addauthor",(req,res)=>{
        res.render("addAuthor",{
            nav,
            title : "Add an Author"
        });
    });

    // add book/author to library
    adminRouter.post("/add",(req,res)=>{
      var item = {
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image,
      }
       var book = Bookdata(item)
       book.save();
       res.redirect('/books');
    });

    return adminRouter;
}

// router function call
module.exports = router;