const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({ dest: '/tmp/'}).single('file'));

app.get('/uploadFile.html', (req, res) => {
   res.sendFile(__dirname + '/public/uploadFile.html');
});

app.post('/file_upload', (req, res) => {
    console.log(req.files);
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    const file = __dirname + '/' + req.files.file.name;

    fs.readFile(req.files.file.path, ((err, data) => {
        fs.writeFile(file, data, (error) => {
            if (error) console.log(error);

            let response = {
                message: 'File uploaded successfully',
                filename: req.files.file.name
            };

            console.log(response);
            res.end(JSON.stringify(response));
        })
    }))
});

const server = app.listen(8081, () => {
    let host = server.address().host;
    let port = server.address().port;

    console.log('Server started at http://%s:%s', host, port);
});
