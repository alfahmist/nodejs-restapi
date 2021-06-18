'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = (req, res) => {
    response.ok("Aplkasi REST API berjalan", res);
}