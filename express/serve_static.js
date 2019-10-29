const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));
app.get('/index.html', (req, res) => {
   res.sendfile(__dirname + '/public/index.html');
});

app.post('/process_post', urlencodedParser, (req, res) => {
    let response = {
      first_name: req.body.first_name,
      last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

const server = app.listen(8081, () => {
    let host = server.address().host;
    let port = server.address().port;

    console.log('Server started at http://%s:%s', host, port);
});
