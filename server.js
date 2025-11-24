const express = require('express')
const app = express()
const port = 3000


const posts = [
    {
        id: 1,
        title: "Ciambellone soffice",
        content: "Un dolce semplice e morbido, perfetto per la colazione.",
        image: "/images/ciambellone.jpeg",
        tags: ["dolci", "colazione", "soffice"]
    },
    {
        id: 2,
        title: "Cracker alla barbabietola",
        content: "Snack croccante, colorato e leggero, ottimo con formaggi freschi.",
        image: "/images/cracker_barbabietola.jpeg",
        tags: ["snack", "barbabietola", "salato"]
    },
    {
        id: 3,
        title: "Pane fritto dolce",
        content: "Ricetta povera ma golosissima, ricoperta di zucchero e cannella.",
        image: "/images/pane_fritto_dolce.jpeg",
        tags: ["dolci", "tradizione", "merenda"]
    },
    {
        id: 4,
        title: "Pasta alla barbabietola",
        content: "Un primo piatto cremoso e colorato, con pistacchi croccanti.",
        image: "/images/pasta_barbabietola.jpeg",
        tags: ["pasta", "barbabietola", "primi"]
    },
    {
        id: 5,
        title: "Torta paesana",
        content: "Dolce rustico e ricco, con pane raffermo, cacao e uvetta.",
        image: "/images/torta_paesana.jpeg",
        tags: ["dolci", "tradizionale", "rustico"]
    }
];

// funzione anonima 
app.get('/', (req, res) => {
    res.send('<h1>Server del mio blog</h1>');
});

app.get('/bacheca', (req, res) => {
    res.json(posts);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})