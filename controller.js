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
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

//menampilkan data mahasiswa by id
exports.tampilMahasiswaById = (req, res) => {
    let id = req.params.id;
    connection.query(`SELECT * FROM mahasiswa where id_mahasiswa= ?`,[id], (error, rows, fields)=> {
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

//menambahkan data mahasiswa
exports.insertMahasiswa = (req, res) => {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan ) VALUES (?,?,?)',[nim,nama,jurusan], (error, rows, fields)=> {
        if(error){
            console.log(error);
        } else {
            response.ok("Berhasil Menambahkan Data", res);
        }
    });
}