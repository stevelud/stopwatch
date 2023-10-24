import express from 'express'

var port = process.env.PORT || 8080;

const app = express()

app.get('/', (req, res) => {
    
})

app.listen(port, () => {
    console.log('Listening on port ' + port + '.');
});