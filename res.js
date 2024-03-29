'use strict';

exports.ok = (values, res) => {
    var data = {
        'status':200,
        'values':values
    };

    res.json(data);
    res.end();
}

//response untuk nested matakuliah
exports.oknested = (values, res)=> {
    //akumulasi
    const hasil = values.reduce((akumulasikan, item)=> {
        //tentukan key groupnya
        if(akumulasikan[item.nama]){
            //buat variable group nama mahasiswa
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah matakuliah
            if(Array.isArray(group.matakuliah)){
                //tambahkan valuenya kedalam group matakuliah
                group.matakuliah.push(item.matakuliah);
            } else {
                group.matakuliah = [group.matakuliah, item.matakuliah]
            }
        } else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };

     res.json(data);
     res.end();
}