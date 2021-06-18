'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = (req, res) => {
    response.ok("Aplkasi REST API berjalan", res);
}

//menampilkan semua data mahasiswa
exports.tampilSemuaMahasiswa = (req, res) => {
    connection.query('SELECT * FROM mahasiswa', (error, rows, fields)=> {
        if(error){
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};