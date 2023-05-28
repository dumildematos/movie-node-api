const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const MovieRouter = require('./src/router/Movie')

app.listen(PORT, ()=> {
    console.log(`listening to port:  ${PORT}`)
})

app.use('/movie', MovieRouter)