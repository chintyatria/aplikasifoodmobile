import express from "express";
import bodyParser from 'body-parser';
import dataRoutes from './routes/pesawat.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/hotel', dataRoutes);

app.get('/', (req,res)=>{
    res.send('Halo');
});

app.listen(PORT, ()=> console.log(`Server Telah berjalan di port ${PORT}`))