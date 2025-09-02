// Dado un array de ventas con producto, cantidad, precio, fecha:
// Usa reduce() para calcular: - Total de ingresos - Producto más vendido (por cantidad) - Promedio de venta por transacción

const ventas = [
    { producto: "Laptop", cantidad: 2, precio: 1200, fecha: "2023-10-01" },
    { producto: "Smartphone", cantidad: 5, precio: 800, fecha: "2023-10-02" },
    { producto: "Tablet", cantidad: 3, precio: 400, fecha: "2023-10-03" },
    { producto: "Laptop", cantidad: 1, precio: 1200, fecha: "2023-10-04" },
    { producto: "Smartphone", cantidad: 2, precio: 800, fecha: "2023-10-05" },
    { producto: "Laptop", cantidad: 4, precio: 1200, fecha: "2023-10-06" }
];
const totalIngresos = ventas.reduce((total, venta) => total + (venta.cantidad * venta.precio), 0);
console.log(`Total de ingresos: $${totalIngresos.toFixed(2)}`);
const productoMasVendido = ventas.reduce((masVendido, venta) => {
    if (!masVendido[venta.producto]) {
        masVendido[venta.producto] = 0;
    }
    masVendido[venta.producto] += venta.cantidad;
    return masVendido;
}, {});
let productoTop = null;
let cantidadMaxima = 0;
for (const producto in productoMasVendido) {
    if (productoMasVendido[producto] > cantidadMaxima) {
        cantidadMaxima = productoMasVendido[producto];
        productoTop = producto;
    }
}
console.log(`Producto más vendido: ${productoTop} con ${cantidadMaxima} unidades vendidas`);
const promedioVenta = totalIngresos / ventas.length;
console.log(`Promedio de venta por transacción: $${promedioVenta.toFixed(2)}`); 

