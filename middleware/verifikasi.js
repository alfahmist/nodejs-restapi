const jwt = require('jsonwebtoken');
const config = require('../config/secret');

let verifikasi = () => {

    return (req, res, next)=> {
        var role = req.body.role;
        //cek authorization header
        var tokenWithBearer = req.headers.authorization;
        if(tokenWithBearer){
            var token =  tokenWithBearer.split(' ')[1];
            //verifikasi
            jwt.verify(token, config.secret, (err,decoded)=> {
                if(err){
                    return res.status(401).send({auth: false, message:'Token tidak terdaftar'});
                } else {
                    if(roles==2){
                        req.auth = decoded;
                        next();
                    }
                    else {
                        return res.status(401).send({auth: false, message:'Gagal memberikan otorisasi role anda!'});
                    }
                } 
            });
        } else {
            return res.status(401).send({auth: false, message:'Token tidak tersedia'});
        }
    }
}

module.exports = verifikasi;