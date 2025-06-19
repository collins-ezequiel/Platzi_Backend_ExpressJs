const errorHandler = (error, req, res, next) => {
    // Determinar el código de estado del error
    const statusCode = error.statusCode || 500;

    // Preparar el mensaje de error
    const message = error.message || "Ocurrió un error inesperado";

    // Registrar el error en la consola para depuración
    console.error(`Hubo un error: ${new Date().toISOString()} ${statusCode} ${message}`);

    // Si hay stack trace, también lo registramos
    if (error.stack) {
        console.error(error.stack);
    }

    // Desestructurar el entorno de Node
    const { NODE_ENV } = process.env;

    // Enviar respuesta JSON con el error
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message,
        // Incluir detalles adicionales solo en modo desarrollo
        ...(NODE_ENV === "development" && { stack: error.stack })
    });
};

module.exports = errorHandler;