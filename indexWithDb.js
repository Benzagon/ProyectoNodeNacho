const express = require("express");
const app = express();
const port = 9000;
const mysql = require("mysql2");

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "menu_restaurant",
});

connection.connect((err) => {
    if (err) {
        console.error("Error conectándose: " + err);
        return;
    }

    console.log("Base de datos conectada");
});

app.get("/", (req, res) => {
     res.send("API running OK ...")
 });

//Ejercicio 1
app.get("/menu", (req, res) => {
    connection.query("SELECT * FROM platos", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
        
        console.log(rows);
        res.send(rows);
    });
});

//Ejercicio 2
app.get("/menu/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    connection.query("SELECT * FROM platos WHERE id = ?", [id], (err, rows) => {
        if (err) {
            res.status(404).send("Dish not found...");
            console.error("Error consultando: " + err);
            return;
        }
    
        console.log(rows);
        res.send(rows);
    });
});

//Ejercicio 3
app.get("/principales", (req, res) =>{
    connection.query("SELECT * FROM platos WHERE tipo = 'principal'", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
    
        console.log(rows);
        res.send(rows);
    });
});

//Ejercicio 4
app.get("/postres", (req, res) =>{
    connection.query("SELECT * FROM platos WHERE tipo = 'postre'", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
    
        console.log(rows);
        res.send(rows);
    });
});

//Ejercicio 5
app.get("/bebidas", (req, res) =>{
    connection.query("SELECT * FROM platos WHERE tipo = 'bebida'", (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
    
        console.log(rows);
        res.send(rows);
    });
});

//Ejercicio 6
app.post("/pedido", (req, res) =>{
    const pedido = req.body.productos;
    connection.query("SELECT * FROM platos WHERE id = ?",[pedido.id], (err, rows) => {
        if (err) {
            console.error("Error consultando: " + err);
            return;
        }
    
        console.log(rows);
        res.send(rows);
    });
    
    console.log(precio)
    res.json({"msg": "Pedido recibido", "precio": precio})
});

app.listen(port, () =>{
    console.log(`> Server running on port ${port}`)
 });
