//Default packages
var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var promise = require("bluebird");
var pg = require('pg');
var fs = require('fs');
var jwt = require('jsonwebtoken');
//Custom packages
var logger = require("../logger");
var messages = require('../GlobalMessages.js');
var conn = require("./Connection.js");
var util = require("./Utility.js");


promise.promisifyAll(bcrypt);
promise.promisifyAll(pg);
