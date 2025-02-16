const express = require('express');
const app = express();
app.get('/users', (req, res) => {
res.json([{ id: 1, name: "João" }, { id: 2, name: "Maria" }]);
});
app.listen(5001, () => console.log('User Service rodando na porta 5001'));