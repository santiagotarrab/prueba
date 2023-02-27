var express = require('express');
var app= express();



app.use(express.static(__dirname + '/public'))
app.get('/about',function(req,res){
    res.sendFile(__dirname + '/public/nosotros.html')
});


app.listen(3000, function(){
    console.log("Server is running!...");
})