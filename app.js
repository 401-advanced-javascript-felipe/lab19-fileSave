'use strict';

const utils = require('./utils');

// require('dotenv').config();
const Q = require('@nmq/q/client');

// let errorEmitter = (error) => {
//   socket.emit('error', error);
// };

const alterFile = (file) => {

  utils.readFile(file)
    .then(data => {
      data = utils.toUpper(data);
      utils.writeFile(file, data);
    })
    .then(() => Q.publish('files', 'save', {name: 'payload'}))
    .catch(() => Q.publish('files', 'file-error', {name: 'payload'}));
};

let file = process.argv.slice(2).shift();
alterFile(file);

// module.exports = errorEmitter;
