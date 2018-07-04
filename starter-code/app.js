const express= require('express');
const app= express();

app.get('/bliss',(req,res)=>{
    res.send("mijito");
})

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'public/about/index.html');
});

app.get('/gallery',(req,res)=>{
    res.sendFile(__dirname+'public/gallery/index.html');
});

app.listen(3000,()=>{
    console.log("esccuchando");
});