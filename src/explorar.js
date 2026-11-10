const ventas = require("./datos");
console.log("Cantidad de registros: " , ventas.length);
console.log("Primer registro: " , ventas[0]);
console.log("Ultimo registro: ", ventas[ventas.length-1]);
console.log("Producto en la posicion numero 4: ", ventas[4].producto);
console.log("Tabla de ventas completa", ventas );