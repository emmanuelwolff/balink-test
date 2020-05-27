const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const get = require('lodash.get');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())

app.get('/api/langs', (req, res) => {
  res.json(['EN', 'FR']);
});

app.post('/api/form', (req, res) => {
    try{
        const mandatoryFields = [
            'personal.firstname', 
            'personal.lastname',
            'address.country',
            'contactability.email',
        ];
        mandatoryFields.forEach(fieldPath => {
            if (!get(req.body, fieldPath)){
                throw 'missing data';
            }
        })
        res.send('OK');
    }
    catch (e){
        console.log(e);
        res.statusCode = 422;
        res.send('KO');
    }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

const port = 5000;
app.listen(port);

console.log(`Form server listening on ${port}`);

