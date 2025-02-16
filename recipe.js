const express = require('express');
const app = express();
app.get('/recipe', (req, res) => {
res.json([{ id: 1, item: "Bolo de chocolate" }, { id: 2, item: "Lasanha"
}]);
});
app.listen(5002, () => console.log('Order Service rodando na porta 5002'));