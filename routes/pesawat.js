import express from 'express';
import {v4 as uuidv4} from 'uuid';

const osas = express.Router();
let pesawat = [];

osas.get('/', (req, res) => {
    console.log(pesawat);
    res.send(pesawat);

    // res.send('Menu pesawat');
});

osas.post('/', (req,res)=>{
    // console.log(`POST SUDAH BISA`);
    // console.log(req.body);
    const data = req.body;

    pesawat.push({ ...data, id: uuidv4() });

    res.send(`Berhasil tambah data pesawat ${data.namaPesawat}`);
});

osas.get('/:id', (req,res)=>{
    // console.log(req.params);
    const { id } = req.params;

    const idUser = pesawat.find((user) => user.id === id);

    res.send(idUser);
})

osas.delete('/:id', (req,res) => {
    const { id } = req.params;

    pesawat = pesawat.filter((user) => user.id !== id);

    res.send(`Berhasil hapus data dengan id ${id}`);
});

osas.patch('/:id', (req,res)=>{
    const { id } = req.params;
    const { namaPesawat, keunggulan, gambar, harga} = req.body;
    const data = pesawat.find((data)=> data.id === id);

    if(namaPesawat) data.namaPesawat = namaPesawat;
    if(keunggulan) data.keunggulan = keunggulan; 
    if(gambar) data.gambar = gambar;  
    if(harga) data.harga = harga;

    res.send(`Berhasil Update data pesawat dengan id ${id}`);
   
});

export default osas;