// Express here
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path')
const router = require('./router.js');

const server = express()
const port = 3000;

server.use(bodyParser.json());
server.use(morgan('dev'));

server.use('/api', router);

server.use('/', express.static(path.join(__dirname, '/../client/dist/')));

server.get('/name', (req, res) =>{
    res.send('Justin EXPRESS REACT REVIEW')
});



server.listen(port, () => console.log(`connected to port ${port}`));

