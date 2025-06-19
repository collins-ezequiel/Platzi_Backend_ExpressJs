require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
console.log(`Puerto: ${PORT}`);

app.get('/', (req, res) => {

    res.send(`
    
        <h1>Curso de Expreess</h1>
        <p>Esto es una app ida</p>
        <p>anda cheto el puerto ${PORT}</p>
    `
    );

});

app.listen(PORT, () => {

    console.log(`Server: http://localhost:${PORT}`)

});

