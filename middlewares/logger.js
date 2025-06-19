const loggerMiddleware = (req, res, next) => {
    // Capturamos el momento en que llega la solicitud
    const timestamp = new Date().toISOString();

    // Registramos información de la solicitud entrante
    console.log(timestamp, req.method, req.url, req.ip);

    // Medimos el tiempo de respuesta
    const start = Date.now();

    // Escuchamos el evento 'finish' para saber cuándo termina la respuesta
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(timestamp, 'response', res.statusCode, duration + 'ms');
    });

    // Pasamos al siguiente middleware o ruta
    next();
};

module.exports = loggerMiddleware;