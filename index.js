import express from "express";
import bodyParser from "body-parser";
import dataRoutes from "./routes/food.js";
let port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use("/food", dataRoutes);

app.get("/", (req, res) => {
  res.send("Selamat Datang");
});

app.listen(port, () =>
  console.log(`Server Telah berjalan di port http://localhost:${port}`)
);
