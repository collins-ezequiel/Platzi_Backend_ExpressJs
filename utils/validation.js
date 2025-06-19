function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

function isValidName(name) {
    return typeof name === 'string' && name.trim().length >= 3;
}

function isNumericId(id) {
    return typeof id === 'number' && Number.isInteger(id) && !isNaN(id);
}

function isUniqueNumericId(id, users) {
    return isNumericId(id) && !users.some(user => user.id === id);
}

/**
 * Valida un usuario según el modo:
 * @param {Object} user - Objeto con name, email, id
 * @param {Array} users - Lista de usuarios existentes
 * @param {string} mode - 'create' o 'update'
 */
function validateUser(user, users, mode = 'create') {
    const { name, email, id } = user;

    // Asegurarse de que user y users existan
    if (!user || !Array.isArray(users)) {
        return { isValid: false, error: 'Datos inválidos' };
    }

    // Validar nombre
    if (!isValidName(name)) {
        return {
            isValid: false,
            error: 'El nombre debe tener al menos 3 caracteres.'
        };
    }

    // Validar email
    if (!isValidEmail(email)) {
        return {
            isValid: false,
            error: 'El correo electrónico no es válido.'
        };
    }

    // Validar ID
    if (!isNumericId(id)) {
        return {
            isValid: false,
            error: 'El ID debe ser un número entero.'
        };
    }

    // Validar ID único solo si es creación
    if (mode === 'create' && !isUniqueNumericId(id, users)) {
        return {
            isValid: false,
            error: 'El ID debe ser único.'
        };
    }

    return { isValid: true };
}

module.exports = {
    isValidEmail,
    isValidName,
    isUniqueNumericId,
    validateUser
};