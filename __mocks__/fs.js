'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ){
    cb('Invalid File');
  }
  else {
    cb(undefined, Buffer.from('File Contents'));
  }
};

exports.writeFile = (file, buffer, cb) => {
  if( file.match(/bad/i) ){
    cb('Invalid File');
  }
  else if (! Buffer.isBuffer(buffer)) {
    cb('Invalid Buffer', undefined);
  }
  else {
    cb(undefined, undefined);
  }
};
