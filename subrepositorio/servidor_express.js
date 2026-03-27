const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (_req, res) => {
    // Express se siente ligero y directo para levantar un servidor sin tanta vuelta.
    // Me gusta que la ruta se entienda rápido, como platicando.
    res.send(`
        <!doctype html>
        <html lang="es">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Árbol del Tec de Monterrey Campus Guadalajara</title>
            </head>
            <body style="font-family: Arial, sans-serif; margin: 2rem;">
                <h1>Árbol del Tec de Monterrey Campus Guadalajara</h1>
                <p><strong>Nombre científico:</strong> <em>Jacaranda mimosifolia</em></p>
                <img
                    src="/assets/arbol_tec_gdl.jpg"
                    alt="Árbol Jacaranda mimosifolia"
                    style="max-width: 100%; height: auto; border-radius: 8px;"
                />
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Servidor Express activo en http://localhost:${port}`);
});
