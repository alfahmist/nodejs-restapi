var connection = require('../koneksi');
var mysql = require('mysql');
var md5  = require('MD5');
var response  = require('../res');
var jwt  = require('jsonwebtoken');
var config  = require('../config/secret');
var ip  = require('ip');

//register
exports.registrasi = (req, res) => {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        role:req.body.role,
        tanggal_daftar: new Date()
    }

    var query = "SELECT email FROM ?? WHERE ??";
    var table = ["user","email", post.email]

    query = mysql.format(query, table);

    connection.query(query, (error, rows)=>{
        if(error){
            console.log(error);
        } else {
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query = mysql.format(query, table);
                connection.query(query, post, (error, rows)=>{
                    if(error){
                        console.log(error);
                    } else {
                        response.ok("Berhasil register user baru", res);
                    }
                });
            } else {
                response.ok("Email sudah terdaftar!");
            }
        }
    })

}