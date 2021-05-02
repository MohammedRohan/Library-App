const express = require("express");
// router
const booksRouter = express.Router();

// router function
function router(nav){
    
    // books array
    var books = [
        {
            title : "Tom and Jerry",
            author : "Joseph Barbera",
            genre : "Cartoon",
            img : "TomandJerryTitleCardc.jpg",
            about : "Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry"
        },
        {
            title : "Harry Potter",
            author : "J K Rowling",
            genre : "Fantasy",
            img : "unnamed.jpg",
            about : "Harry Potter is a series of seven fantasy novels written by British author, J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry"
        },
        {
            title : "Pathummayude Aadu",
            author : "Basheer",
            genre : "Drama",
            img : "pathu.jpg",
            about : "Pathummayude Aadu is a humorous novel by Vaikom Muhammad Basheer. The characters of the novel are members of his family and the action takes place at his home in Thalayolaparambu. The goat in the story belongs to his sister Pathumma. Basheer begins the novel with an alternative title for the book, Pennungalude Buddhi."
        }
    ]
    
    // books page
    booksRouter.get("/",(req,res)=>{
        res.render("books",
        {
            nav,
            title : "Books",
            books
        });
    });
    
    // single book page
    booksRouter.get("/:id",(req,res)=>{
        const id = req.params.id;
        res.render("book",{
            nav,
            title : "Book",
            book : books[id]
        });
    });

    return booksRouter;
}

// router function call
module.exports = router;