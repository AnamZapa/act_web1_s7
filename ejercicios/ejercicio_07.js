// Crea arrays de: - Números desordenados - ordena ascendente y descendente - Nombres de personas - ordena alfabéticamente - Objetos con propiedad edad - ordena por edad - Usa reverse() para invertir el orden

const numeros = [34, 7, 23, 32, 5, 62];
console.log("Números desordenados:", numeros);  
const numerosAsc = [...numeros].sort((a, b) => a - b);
console.log("Números ordenados ascendente:", numerosAsc);  
const numerosDesc = [...numeros].sort((a, b) => b - a);
console.log("Números ordenados descendente:", numerosDesc);
const nombres = ["Ana", "Luis", "Carlos", "María", "Zoe", "Pedro"];
console.log("Nombres desordenados:", nombres);
const nombresAlfabetico = [...nombres].sort();
console.log("Nombres ordenados alfabéticamente:", nombresAlfabetico);
const personas = [
    { nombre: "Ana", edad: 28 },
    { nombre: "Luis", edad: 34 },
    { nombre: "Carlos", edad: 22 },
    { nombre: "María", edad: 30 },
    { nombre: "Zoe", edad: 25 }
];
console.log("Personas desordenadas por edad:", personas);
const personasPorEdad = [...personas].sort((a, b) => a.edad - b.edad);
console.log("Personas ordenadas por edad:", personasPorEdad);
const numerosInvertidos = [...numeros].reverse();
console.log("Números invertidos:", numerosInvertidos);
const nombresInvertidos = [...nombres].reverse();
console.log("Nombres invertidos:", nombresInvertidos);
const personasInvertidas = [...personas].reverse();
console.log("Personas invertidas por edad:", personasInvertidas);