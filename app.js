const express = require ('express');
const app = express();
const port =3000;

app.use(express.static('public'));

app.listen(port,()=>{
    console.log('app reunning on port 3000')
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/works',(req,res)=>{
    res.sendFile(__dirname + '/views/works.html');
})

app.get('/gallery',(req,res)=>{
    res.sendFile(__dirname + '/views/gallery.html');
})

app.use((req, res, next) => {
    res.status(404).send("Err404: Sorry can't find that!")
  })

