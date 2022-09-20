const express = require("express");
const app = express();
const port = 9000;

app.use(express.json());

const menu = require("./menu.json")

// const users = [
//     {id: 1, name: "John Doe"},
//     {id: 2, name: "Jane Smith"},
//     {id: 3, name: "Marco Polo"},
// ];

 app.get("/", (req, res) => {
     res.send("API running OK ...")
 });

//Ejercicio 1
app.get("/menu", (req, res) => {
     res.send(menu);
});

//Ejercicio 2
app.get("/menu/:id", (req, res) =>{
   const id = parseInt(req.params.id);
   const plate = menu.find((plate) => plate.id === id);
    
   if(!plate)
       res.status(404).send("Dish not found...");  
   else
       res.send(plate);
});

//Ejercicio 3
app.get("/principales", (req, res) =>{
    const principales = menu.filter((dish) => dish.tipo === "principal");
    res.send(principales);
});

//Ejercicio 4
app.get("/postres", (req, res) =>{
    const postres = menu.filter((dish) => dish.tipo === "postre");
    res.send(postres);
});

//Ejercicio 5
app.get("/bebidas", (req, res) =>{
    const bebidas = menu.filter((dish) => dish.tipo === "bebida");
    res.send(bebidas);
});

//Ejercicio 6
app.post("/pedido", (req, res) =>{
    const pedido = req.body;
    const dishesOrdered = menu.filter((dish) => dish.id === pedido.id)
    
    console.log(dishesOrdered)
    res.json(pedido)
});
// app.get("/users/:id", (req, res) =>{
//     const id = parseInt(req.params.id);
//     const user = users.find((user) => user.id === id);

//     if(!user)
//         res.status(404).send("User not found")
//     else
//         res.status(200).json(user)
// });

 app.listen(port, () =>{
    console.log(`> Server running on port ${port}`)
 });
