//Default packages
var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var promise = require("bluebird");
var pg = require('pg');
var fs = require('fs');
var jwt = require('jsonwebtoken');
//Custom packages



promise.promisifyAll(bcrypt);
promise.promisifyAll(pg);

exports.getProducts = function(req,res){

};