const express = require('express');
const app = express();
const PORT = 5002;

const recipes = [
    { id: 1, item: "Bolo de chocolate" },
    { id: 2, item: "Lasanha" }
];

app.get('/recipe', (req, res) => {
    res.json(recipes);
});

app.get('/recipe/:id', (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
    const recipe = recipes.find(r => r.id === recipeId);

    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).json({ message: "Receita não encontrada" });
    }
});

app.listen(PORT, () => {
    console.log(`Recipe Service rodando na porta ${PORT}`);
});
