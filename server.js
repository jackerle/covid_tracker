const express = require('express')
const app = express()


app.use(express.static('build'))
app.get(('/'),(req,res)=>{
    res.send('./build/index.html');
})

app.listen(80,()=>{
    console.log('opened on port 80');
    console.log('http://localhost')
})