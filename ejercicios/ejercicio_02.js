// Usando el inventario del ejercicio anterior, utiliza el método filter() para: - Mostrar solo productos de la categoría "Electrónicos" - Mostrar productos con stock menor a 10 - Mostrar productos con precio mayor a $500

const inventario = [
    { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónicos", stock: 5 },
    { id: 2, nombre: "Smartphone", precio: 800, categoria: "Electrónicos", stock: 15 }, 
    { id: 3, nombre: "Televisor", precio: 600, categoria: "Electrónicos", stock: 8 },
    { id: 4, nombre: "Cámara", precio: 300, categoria: "Electrónicos", stock: 12 },
    { id: 5, nombre: "Tablet", precio: 400, categoria: "Electrónicos", stock: 20 },
    { id: 6, nombre: "Auriculares", precio: 150, categoria: "Electrónicos", stock: 25 },
    { id: 7, nombre: "Reloj Inteligente", precio: 250, categoria: "Electrónicos", stock: 30 }
];
const productosElectronicos = inventario.filter(producto => producto.categoria === "Electrónicos");
console.log("Productos de la categoría 'Electrónicos':");
productosElectronicos.forEach(producto => {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}, Stock: ${producto.stock}`);
});
const productosBajoStock = inventario.filter(producto => producto.stock < 10);
console.log("Productos con stock menor a 10:");
productosBajoStock.forEach(producto => {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}, Stock: ${producto.stock}`);
});
const productosPrecioAlto = inventario.filter(producto => producto.precio > 500);
console.log("Productos con precio mayor a $500:");
productosPrecioAlto.forEach(producto => {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}, Stock: ${producto.stock}`);
});
