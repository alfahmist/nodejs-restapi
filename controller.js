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

//edit data mahasiswa
exports.editMahasiswa = (req, res)=> {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?',[nim,nama,jurusan,id], (error, rows, fields)=> {
        if(error){
            console.log(error); 
        } else {
            response.ok("Berhasil Ubah Data", res);
        }
    });
}

//hapus mahasiswa
exports.hapusMahasiswa = (req, res)=> {
    var id = req.body.id_mahasiswa;

    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?',[id], (error, rows, fields)=> {
        if(error){
            console.log(error); 
        } else {
            response.ok("Berhasil Delete Data", res);
        }
    });
}

//menampilkan matakuliah group
exports.tampilGroupMataKuliah = (req, res)=> {
    connection.query(`SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs 
    JOIN mahasiswa
    JOIN matakuliah
    WHERE krs.id_mahasiswa = mahasiswa.id_mahasiswa
    AND krs.id_matakuliah = matakuliah.id_matakuliah`, 
    (error, rows, fields)=> {
        if(error){
            console.log(error);
        } else {
            response.oknested(rows, res);
        }
    });
}