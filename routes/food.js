import express from 'express';
import {v4 as uuidv4} from 'uuid';

const appFood = express.Router();
let food = [];

appFood.get('/', (req, res) => {
    console.log(food);
    res.send(sepatu);

    // res.send('Menu sepatu');
});

appFood.post('/', (req,res)=>{
    // console.log(`POST SUDAH BISA`);
    // console.log(req.body);
    const data = req.body;

    food.push({ ...data, id: uuidv4() });

    res.send(`Berhasil tambah data food ${data.food}`);
});

appFood.get('/:id', (req,res)=>{
    // console.log(req.params);
    const { id } = req.params;

    const idUser = food.find((user) => user.id === id);

    res.send(idUser);
})

appFood.delete('/:id', (req,res) => {
    const { id } = req.params;

    food = food.filter((user) => user.id !== id);

    res.send(`Berhasil hapus data dengan id ${id}`);
});

appFood.patch('/:id', (req,res)=>{
    const { id } = req.params;
    const { nama, deskripsi, gambar, harga} = req.body;
    const data = food.find((data)=> data.id === id);

    if(nama) data.nama = nama;
    if(deskripsi) data.deskripsi = deskripsi; 
    if(gambar) data.gambar = gambar;  


    res.send(`Berhasil Update data food dengan id ${id}`);
   
});

export default appFood;