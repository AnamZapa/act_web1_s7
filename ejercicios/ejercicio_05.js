// Crea un array de usuarios con id, nombre, email, activo.
// Implementa búsquedas usando: - find() para buscar usuario por email - findIndex() para obtener posición de usuario por id - some() para verificar si hay usuarios inactivos - every() para verificar si todos tienen email válido (contiene @)

const usuarios = [
    { id: 1, nombre: "Juan Pérez", email: "juena.perez@correo.com", activo: true },
    { id: 2, nombre: "María Gómez", email: "maria.gomez@correo.com", activo: false },
    { id: 3, nombre: "Carlos López", email: "carlos.lopez@correo.com", activo: true },
    { id: 4, nombre: "Ana Martínez", email: "ana.martinez@correo.com ", activo: true },
    { id: 5, nombre: "Luis Rodríguez", email: "luis.rodriguez@correo.com", activo: false }
];

const usuarioEmail = usuarios.find(user => user.email === "maria@example.com");
console.log("Usuario encontrado:", usuarioEmail);

const indiceUsuario = usuarios.findIndex(user => user.id === 2);
console.log("Posición de usuario con id=2:", indiceUsuario);

const hayInactivos = usuarios.some(user => user.activo === false);
console.log("¿Hay usuarios inactivos?:", hayInactivos);

const emailsValidos = usuarios.every(user => user.email.includes("@"));
console.log("¿Todos tienen email válido?:", emailsValidos);
