const express = require("express");

const app = express();

app.get("/", (req, res, next)=>{
    res.json(
        {"id":1,
        "purpose":"say hello"
    }
    );
});
app.listen(8008, function(){
    console.log("listening port 8008");
});