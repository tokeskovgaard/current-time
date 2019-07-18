import express from 'express';

// Create a new express application instance
const app: express.Application = express();

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
app.use(express.static('public'));

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
