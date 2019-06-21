'use strict';

/**
 * Helps alter the file
 * @module src/utils
 * @desc node's fs modules promisified using util
 */

const utils = module.exports = exports = {};

const fs = require('fs');


/**
 * @param {filePath} filePath - the contents of a file as a buffer
 * @return {string} a string with the contents of the file uppercase
 */
utils.readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if(err) reject(err);
      else resolve(data);
    });
  });
};

/**
 * @param {Buffer} data - the contents of a file as a buffer
 * @return {string} a string with the contents of the file uppercase
 */
utils.toUpper = (data) => {
  data = Buffer.from(data);
  return data.toString().toUpperCase();
};

/**
 * @param {filePath} file - location on where to save the file
 * @param {string} text - the contents of a file as a string
 * @return {} saves file with new data to dir
 */
utils.writeFile = (file, text) => {
  return new Promise((resolve, reject) =>{
    fs.writeFile(file, text, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};
