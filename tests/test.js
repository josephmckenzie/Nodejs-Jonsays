'use strict';

var test = require('unit.js');
var index = require('../index.js');
var sayings = require('../sayings.js')

describe('Tests index', function() {
  it('verifies successful response', function(done) {
    index.get({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.string(result.body).contains('Jon Says');
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });

  it('Has Correct Nav Links', function(done) {
    index.get({ /* event */ }, { /* context */ }, (err, result) => {
      // console.log(result.body)
      try {
        test.number(result.statusCode).is(200);
        test.value(result.body).contains('Home');
        test.string(result.body).contains('Mined Minds');
        test.string(result.body).contains('Jon Says Phrases');
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });



});

describe('Tests Sayings', function() {
  it('verifies successful response', function(done) {
    sayings.get({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.string(result.body).contains('Add your own Jon Says Phrase today');
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });

  it('Has Correct Nav Links', function(done) {
    index.get({ /* event */ }, { /* context */ }, (err, result) => {
      // console.log(result.body)
      try {
        test.number(result.statusCode).is(200);
        test.value(result.body).contains('Home');
        test.string(result.body).contains('Mined Minds');
        test.string(result.body).contains('Jon Says Phrases');
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });

});