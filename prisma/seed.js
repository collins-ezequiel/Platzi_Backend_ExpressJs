// Utilizamos el cliente de Prisma para interactuar con la base de datos
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Creación de usuarios de demostración
/*     const users = [
        { name: 'Usuario 1', email: 'usuario1@ejemplo.com' },
        { name: 'Usuario 2', email: 'usuario2@ejemplo.com' },
        { name: 'Usuario 3', email: 'usuario3@ejemplo.com' }
    ];

    for (const user of users) {
        await prisma.user.create({
            data: user
        });
    }

    console.log('Usuarios de demostración creados con éxito'); */
    await prisma.user.deleteMany();

}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());