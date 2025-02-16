const express = require('express');
const app = express();
const PORT = 5001;

let users = [
    { id: 1, name: "João" },
    { id: 2, name: "Maria" }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
});

app.listen(PORT, () => {
    console.log(`User Service rodando na porta ${PORT}`);
});
