'use strict';

const utils = require('../src/utils');

jest.mock('fs');

describe('utils.toUpper()', () => {
  it('should uppercase the contents of a buffer', () => {
    // arrange
    let data = Buffer.from('hello');

    // act
    data = utils.toUpper(data);

    // assert
    expect(data).toBe('HELLO');
  });

});


describe('utils.readFile()', () => {
  it('should reject and return invalid file', () => {
    // arrage
    expect.assertions(1);
    let file = 'bad.txt';

    // act and assert
    return expect(utils.readFile(file)).rejects.toMatch('Invalid File');
  });

  it('should resolve and receive file contents', () => {
    expect.assertions(1);
    // arrange
    let file = 'good.txt';

    // act and assert
    return utils.readFile(file)
      .then(data => {
        expect(Buffer.isBuffer(data)).toBeTruthy();
      });
  });

});


// 9:34 time stamp, 9:40 for socket.io-client
describe('utils.writeFile()', () => {
  it('should reject and return invalid file', () => {
    expect.assertions(1);

    let file = 'bad.txt';
    let string = 'sample string of data';
    
    return expect(utils.writeFile(file, string)).rejects.toMatch('Invalid File');
  });


  it('should resolve and save to file', () => {
    expect.assertions(1);
    let file = 'good.txt';
    let string = 'sample string of data';

    return utils.writeFile(file, string)
      .then(data => {
        console.log(data);
        expect(data).toBe(undefined);
      });

  });


});
