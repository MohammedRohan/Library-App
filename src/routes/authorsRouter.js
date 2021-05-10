const express = require("express");
// router
const authorsRouter = express.Router();


// router function
function router(nav){

    // authors array
    var authors = [
        {
            author : "Joseph Barbera",
            book : "Tom and Jerry",
            genre : "Cartoon",
            img : "JB.jpg",
            about : "Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.He was the co-founder of the company Hanna-Barbera, with his longtime partner William Hanna. Barbera was born in an Italian-American family."
        },
        {
            author : "J K Rowling",
            book : "Harry Potter",
            genre : "Fanstasy",
            img : "jk.jpg",
            about : "Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter.J.K. Rowling first had the idea for Harry Potter while delayed on a train travelling from Manchester to London King’s Cross in 1990. Over the next five years, she began to plan out the seven books of the series. She wrote mostly in longhand and amassed a mountain of notes, many of which were on scraps of paper."
        },
        {
            author : "Basheer",
            book : "Pathummayude Aadu",
            genre : "Drama",
            img : "Basheer.jpg",
            about : "Vaikom Muhammad Basheer, also known as Beypore Sulthan, was an Indian independence activist and writer of Malayalam literature.Born in Thalayolaparambu in Kottayam District as the eldest child of a timber businessman, Basheer even from his childhood days was attracted to Gandhian thoughts and ideologies. He participated in freedom struggles and was imprisoned which also inspired his writings."
        }
    ]

    // authors page
    authorsRouter.get("/",(req,res)=>{
        res.render("authors",{
            nav,
            title : "Authors",
            authors
        });
    });

    // single author page
    authorsRouter.get("/:id",(req,res)=>{
        const id = req.params.id;
        res.render("author",{
            nav,
            title : "Author",
            author : authors[id]
        });
    });

    return authorsRouter;
}

// router function call
module.exports = router;