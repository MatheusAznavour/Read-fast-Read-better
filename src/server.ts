import { Request, Response, Application } from 'express';

const express = require('express')
const app:Application = express()
const port = 5050

const path = require('path')
const htmlPath = (__dirname + './public/index.html')


app.use(express.static(path.resolve(__dirname, '..', 'public')))

app.get('/', function(req: Request, res: Response){
    res.sendFile(htmlPath)
})

app.listen(port, function(){
    console.log('Listen in port ->', port)
})