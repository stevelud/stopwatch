import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var port = process.env.PORT || 8080;

const app = express()

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(port, () => {
    console.log('Listening on port ' + port + '.');
});