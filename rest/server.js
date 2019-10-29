const express = require('express');
const app = express();
const fs = require('fs');

const jsonPath = __dirname + '/users.json';

app.get('/listUsers', (req, res) => {
    fs.readFile(jsonPath, 'utf8', ((err, data) => {
        if (err) return console.log(err);
        console.log(user);
        console.log(data);
        res.end(data);
    }));
});

app.get('/:id', (req, res) => {
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) return console.log(err);

        let users = JSON.parse(data);
        let user = users['user' + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

app.delete('/deleteUser', (req, res) => {
    let id = 2;
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) return console.log(err);

        data = JSON.parse(data);
        delete data['user' + id];
        console.log(data);
        res.end(JSON.stringify(data))
    });
});

app.post('/addUser', (req, res) => {
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) return console.log(err);

        console.log(user);
        data = JSON.parse(data);
        data['user2'] = user['user2'];

        console.log(data);
        res.end(JSON.stringify(data));
    });
});

const user = {
    'user2': {
        'name': 'Maksim',
        'password': 'pwd213',
        'profession': 'Software Developer',
        'id': 4
    }
};

const server = app.listen(8081, () => {
    let host = server.address().host;
    let port = server.address().port;

    console.log('Server started at http://%s:%s', host, port);
});
