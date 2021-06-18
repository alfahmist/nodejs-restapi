'use strict';

module.exports = (app) => {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/mahasiswa')
        .get(jsonku.tampilSemuaMahasiswa);

    app.route('/mahasiswa/:id')
        .get(jsonku.tampilMahasiswaById);
}