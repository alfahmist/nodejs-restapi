var mysql = require('mysql');

//koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("mysql terkoneksi");
})

module.exports = conn;