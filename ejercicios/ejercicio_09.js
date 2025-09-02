// Crea un objeto persona con propiedades anidadas (dirección, contacto).
// Demuestra: - Desestructuración básica - Renombrado de variables - Valores por defecto - Desestructuración anidada - Rest operator en objetos

const persona = {
    nombre: "Ana",
    edad: 28,   
    direccion: {
        calle: "CL 66 60 29",
        ciudad: "Bello",    
        pais: "Colombia"
    },
    contacto: {
        email: "anamaria241307@gmail.com",
        telefono: "1234567890"
    }
};  
// Desestructuración básica
const { nombre, edad } = persona;
console.log(nombre, edad);
 
// Renombrado de variables
const { nombre: n, edad: e } = persona;
console.log(n, e);
 

// Valores por defecto
const { profesion = "Administradora" } = persona;

// Desestructuración anidada
const { direccion: { ciudad, pais } } = persona;
console.log(ciudad, pais);

// Rest operator en objetos
const { nombre: nom, ...resto } = persona;
console.log(nom);
console.log(resto);

