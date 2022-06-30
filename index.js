import express from "express";
import bodyParser from 'body-parser';
import dataRoutes from './routes/pesawat.js';
let port = process.env.PORT || 3000;

const app = express();


app.use(bodyParser.json());
app.use('/pesawat', dataRoutes);

app.get('/', (req,res)=>{
    res.send('Halo');
});

app.listen(port, ()=> console.log(`Server Telah berjalan di port http://localhost:${port}`))