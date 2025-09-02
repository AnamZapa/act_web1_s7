// Crea un array de objetos que represente un inventario de productos. Cada producto debe tener: id, nombre, precio, categoria, stock.
// Declara al menos 5 productos y muestra: - Todos los productos - Total de productos en inventario - Valor total del inventario


const inventario = [
    { id: 1, nombre: "Manzana", precio: 0.5, categoria: "Fruta", stock: 100 },
    { id: 2, nombre: "Leche", precio: 1.2, categoria: "Lácteo", stock: 50 },
    { id: 3, nombre: "Pan", precio: 1.0, categoria: "Panadería", stock: 30 },
    { id: 4, nombre: "Huevos", precio: 2.5, categoria: "Lácteo", stock: 20 },
    { id: 5, nombre: "Arroz", precio: 0.8, categoria: "Cereal", stock: 80 }
];
console.log("Todos los productos en inventario:");
inventario.forEach(producto => {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}, Categoria: ${producto.categoria}, Stock: ${producto.stock}`);
});

const totalProductos = inventario.length;
console.log(`Total de productos en inventario: ${totalProductos}`); 
const valorTotalInventario = inventario.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
console.log(`Valor total del inventario: $${valorTotalInventario.toFixed(2)}`);

