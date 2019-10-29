const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
    console.log(req);
    console.log(res);
});

const server = app.listen(8081, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});
