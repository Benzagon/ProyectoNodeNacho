const express = require("express");
const app = express();
const port = 9000;

const users = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Smith"},
    {id: 3, name: "Marco Polo"},
];

app.get("/", (req, res) => {
    res.send("API running OK ...")
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/users/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if(!user)
        res.status(404).send("User not found")
    else
        res.status(200).json(user)
});

app.listen(port, () =>{
    console.log(`> Server running on port ${port}`)
});
