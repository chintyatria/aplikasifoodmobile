import express from 'express';
import {v4 as uuidv4} from 'uuid';

const sepatuify = express.Router();
let sepatu = [];

sepatuify.get('/', (req, res) => {
    console.log(sepatu);
    res.send(sepatu);

    // res.send('Menu sepatu');
});

sepatuify.post('/', (req,res)=>{
    // console.log(`POST SUDAH BISA`);
    // console.log(req.body);
    const data = req.body;

    sepatu.push({ ...data, id: uuidv4() });

    res.send(`Berhasil tambah data sepatu ${data.namasepatu}`);
});

sepatuify.get('/:id', (req,res)=>{
    // console.log(req.params);
    const { id } = req.params;

    const idUser = sepatu.find((user) => user.id === id);

    res.send(idUser);
})

sepatuify.delete('/:id', (req,res) => {
    const { id } = req.params;

    sepatu = sepatu.filter((user) => user.id !== id);

    res.send(`Berhasil hapus data dengan id ${id}`);
});

sepatuify.patch('/:id', (req,res)=>{
    const { id } = req.params;
    const { nama, deskripsi, gambar, harga} = req.body;
    const data = sepatu.find((data)=> data.id === id);

    if(nama) data.nama = nama;
    if(deskripsi) data.deskripsi = deskripsi; 
    if(gambar) data.gambar = gambar;  
    if(harga) data.harga = harga;

    res.send(`Berhasil Update data sepatu dengan id ${id}`);
   
});

export default sepatuify;