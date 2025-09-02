// Crea un objeto y demuestra: - Object.keys() - obtener claves - Object.values() - obtener valores - Object.entries() - obtener pares clave-valor - Iterar sobre el objeto con forEach()

const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Rojo"
};

const claves = Object.keys(coche);
console.log(claves); // ["marca", "modelo", "año", "color"]

const valores = Object.values(coche);
console.log(valores); // ["Toyota", "Corolla", 2022, "Rojo"]

const entradas = Object.entries(coche);
console.log(entradas);
// [["marca", "Toyota"], ["modelo", "Corolla"], ["año", 2022], ["color", "Rojo"]]

Object.entries(coche).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});
