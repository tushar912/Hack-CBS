const express = require('express');
const { admin } = require('././config')

const tokenRouter = express.Router();
const db =admin.firestore();

tokenRouter.post('/',(req,res)=>{
    const newToken = {
        token: req.body.token
    }
    db.collection('tokens').add(newToken).then((doc)=>{
        res.json(`${doc.id} created successfully`);
        console.log("created")

    }).catch((err)=>{
        res.json(err);
        console.log(err);
    })
})

module.exports = tokenRouter