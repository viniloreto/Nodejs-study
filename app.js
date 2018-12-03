var express = require('express');
var app = express();


app.get('/', (req, res) => {
    res.send("<html><body>Portal de Noticias</body></html>")
})

app.get('/tecnologia', (req, res) => {
    res.send("<html><body>Noticias de Tecnologia</body></html>")
})

app.get('/moda', (req, res) => {
    res.send("<html><body>Noticias de Moda</body></html>")
})
app.listen(3000, () => {
    console.log('Servidor rodando com express');
})