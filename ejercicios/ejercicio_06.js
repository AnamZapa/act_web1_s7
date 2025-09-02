// Crea un array inicial [1, 2, 3, 4, 5] y demuestra: - push() y pop() - agregar y quitar del final - shift() y unshift() - agregar y quitar del inicio - splice() - insertar elementos en posición específica - slice() - extraer porción sin modificar original

const numeros = [1, 2, 3, 4, 5];
console.log("Array inicial:", numeros);

// Usando push() para agregar al final
numeros.push(6);
console.log("Después de push(6):", numeros);    

// Usando pop() para quitar del final
const ultimo = numeros.pop();
console.log("Después de pop():", numeros, "(Elemento removido:", ultimo + ")");

// Usando unshift() para agregar al inicio
numeros.unshift(0);
console.log("Después de unshift(0):", numeros);

// Usando shift() para quitar del inicio
const primero = numeros.shift();
console.log("Después de shift():", numeros, "(Elemento removido:", primero + ")");

// Usando splice() para insertar en posición específica (índice 2)
numeros.splice(2, 0, 1.5, 2.5); // Inserta 1.5 y 2.5 en índice 2
console.log("Después de splice(2, 0, 1.5, 2.5):", numeros);

// Usando slice() para extraer porción (índices 1 a 4)
const porcion = numeros.slice(1, 4);
console.log("Porción extraída con slice(1, 4):", porcion);
console.log("Array original después de slice():", numeros); // El array original no se modifica
