const express = require('express');
const app = express();
const cors = require("cors");
// const data = require('./course.json');
const PORT=8080;


const data = 
    [
        {
          "heading": "Catch Waves with an adventure guide",
          "subheading": "Joshu Tree Overnight Adventure",
          "description": "Gujrat is vastly Underrated and is mystery to us why the region is not well",
          "brief":"Gujrat is vastly Underrated and is mystery to us why the region is not well as a tourist destination. It has a plethora of temples and palaces .",
          "bdescription": "Gujrat is vastly Underrated and is mystery to us why the region is not well as a tourist destination. It has a plethora of temples and palaces . Gujrat is vastly underrated and it's mystery to us why the region is not well known as atourist destination it has a piethora of temples and palaces",
          "job": "Travel"
        }
    ] 

app.use(cors());


app.get("/jasonData" , (req,res)=>{
    // console.log(req.query);
    res.send(data);
})

app.listen(PORT , ()=>{
    console.log(`Server is listening on port ${PORT}`);
});