// Dado el array ['JavaScript', 'Python', 'Java', 'C++', 'Go']:
// - Extrae los primeros 3 lenguajes - Extrae el primero y el último - Usa rest operator para separar el primero del resto - Intercambia dos variables usando desestructuración


const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];

// Extrae los primeros 3 lenguajes
const primerosTres = lenguajes.slice(0, 3);
console.log("Primeros 3 lenguajes:", primerosTres);
// Extrae el primero y el último
const primero = lenguajes[0];
const ultimo = lenguajes[lenguajes.length - 1];
console.log("Primero:", primero, ", Último:", ultimo);  
// Usa rest operator para separar el primero del resto
const [primeroRest, ...resto] = lenguajes;
console.log("Primero con rest operator:", primeroRest);
console.log("Resto de lenguajes:", resto);
// Intercambia dos variables usando desestructuración
let a = 'Hola';
let b = 'Mundo';
console.log("Antes del intercambio: a =", a, ", b =", b);
[a, b] = [b, a];
console.log("Después del intercambio: a =", a, ", b =", b);


