// Crea un array de estudiantes con nombre, edad, notas (array de números). Usa map() para: - Crear un nuevo array con solo los nombres - Crear un array con el promedio de cada estudiante - Agregar una propiedad estado ("Aprobado" si promedio >= 70, "Reprobado" si < 70)

const estudiantes = [
    { nombre: "Ana", edad: 20, notas: [85, 90, 78] },
    { nombre: "Luis", edad: 22, notas: [60, 65, 70] },
    { nombre: "Marta", edad: 19, notas: [95, 100, 92] },
    { nombre: "Carlos", edad: 21, notas: [50, 55, 60] },
    { nombre: "Sofía", edad: 20, notas: [75, 80, 70] }
];

const nombresEstudiantes = estudiantes.map(estudiante => estudiante.nombre);
console.log("Nombres de los estudiantes:");
console.log(nombresEstudiantes);    
const promediosEstudiantes = estudiantes.map(estudiante => {
    const sumaNotas = estudiante.notas.reduce((suma, nota) => suma + nota, 0);
    return (sumaNotas / estudiante.notas.length).toFixed(2);
});
console.log("Promedio de cada estudiante:");
console.log(promediosEstudiantes);  
const estudiantesConEstado = estudiantes.map(estudiante => {
    const sumaNotas = estudiante.notas.reduce((suma, nota) => suma + nota, 0);
    const promedio = sumaNotas / estudiante.notas.length;
    const estado = promedio >= 70 ? "Aprobado" : "Reprobado";
    return { ...estudiante, promedio: promedio.toFixed(2), estado };
});
console.log("Estudiantes con estado:");
console.log(estudiantesConEstado);
