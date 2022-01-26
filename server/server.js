// import express from "express";
// import Mongoose from "mongoose";
// import Cors from "cors";
// import bodyParser from "body-parser";

const express = require ("express");
const Mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require('cors')
var ObjectID = require('mongoose').Types.ObjectId;

const app=express()
//const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://mwmasjadh:asjadh12345@food-recipe.5okea.mongodb.net/Food-Recipe?retryWrites=true&w=majority`

//Midlewares
//app.use(bodyParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//Models
var Posts = require("./models/posts.js");
const { Router } = require("express");

//DB config
Mongoose.connect(connection_url, {
    // useNewUrlParser: true,
    //  useCreateIndex: true,
    //  useUnifiedTopology: true,
    
     
     
 }).then(()=>console.log("Connection Established"))

//  app.get('/posts', (req, res) => {
//     foodRecipe.find((err, docs) => {
//         if (!err) res.send(docs)
//         else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2)) //16:46
//     }) 
// })

app.get('/posts', (req, res) => {
    Posts.find().exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            
            success:true,
            existingPosts:posts
        })
    })
})


// app.post('/post/save', (req, res) => {
//     var newRecord = new foodRecipe({
//         title: req.body.title,
//         message: req.body.message
//     })

//     newRecord.save((err, docs) => {
//         if (!err) res.send(docs)
//         else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
//     })
// })


app.post('/post/save', (req, res) => {
   let newPost = new Posts(req.body);
   
   newPost.save((err) => {
       if(err) {
           return res.status(400).json({
               error:err
           });
       }
       return res.status(200).json({
           success : "Post saved"
       });
   });
    
});


// app.put('/post/update/:id', (req, res) => {
//     if (!ObjectID.isValid(req.params.id))
//         return res.status(400).send('No record with given id : ' + req.params.id)

//     var updatedRecord = {
//         title: req.body.title,
//         message: req.body.message
//     }

//     foodRecipe.findByIdAndUpdate(req.params.id, { $set: updatedRecord },{new:true}, (err, docs) => {
//         if (!err) res.send(docs)
//         else console.log('Error while updating a record : ' + JSON.stringify(err, undefined, 2))
//     })
// })


app.put('/post/update/:id', (req, res) => {
    Posts.findByIdAndUpdate(
        req.params.id, 
        {
            $set:req.body
        },
        (err,post)=> {
            if(err) {
                return res.status(400).json({error:err})
            }
            return res.status(200).json({
                success: "Updated successfully"
            })
        }
    )
})



// app.delete('/post/delete/:id', (req, res) => {
//     if (!ObjectID.isValid(req.params.id))
//         return res.status(400).send('No record with given id : ' + req.params.id)

//         foodRecipe.findByIdAndRemove(req.params.id, (err, docs) => {
//         if (!err) res.send(docs)
//         else console.log('Error while deleting a record : ' + JSON.stringify(err, undefined, 2))
//     })
// })

app.delete('/post/delete/:id', (req, res) => {
    Posts.findByIdAndRemove(req.params.id).exec((err, deletePost)=>{
        if(err) return res.status(400).json({
            message: "Delete unsuccess"
        });

        return res.json({
            message: "Delete unsuccess", deletePost
        })
    })
        
        
})

app.get("/post/:id", (req,res)=>{
    let postId = req.params.id;

    Posts.findById(postId, (err,post)=>{
        if(err) {
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success : true,
            post
        })
    })
})





 //Listener
// app.listen(port,()=>
// console.log(`listening on localhost: ${port}`));

app.listen(4000,()=>{
    console.log("server is running")
}) 
