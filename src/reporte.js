/**
 * Reporte de Consola - Café Origen v0.1
 * Ejecuta este archivo para probar tus funciones: node src/reporte.js
 */
const ventas = require("./datos");
const {
  valorVenta,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
  ventasPorCiudadM,
  unidadesPorProducto,
  topProdValor,
  topProductosPorValorOrdenado,
  ventasDelDia,
  ventasValidas,
  totalV,
  unidadesV,
  ordenado,
  ventasTotales,
} = require("./analitica");

console.log("==============================================================");
console.log("         REPORTE DE ANALÍTICA - CAFÉ ORIGEN v0.1              ");
console.log("==============================================================\n");

// ----------------------------------------------------------------------------
// 1. EXPLORACIÓN INICIAL DE DATOS
// ----------------------------------------------------------------------------
console.log("--- 1. EXPLORACIÓN DE LA MUESTRA ---");
console.log("Cantidad de registros:", ventas.length);
console.log("Primer registro      :", ventas[0]);
console.log("Último registro      :", ventas.at(-1));
console.log();

// ----------------------------------------------------------------------------
// 2. INDICADORES CON CICLOS FOR...OF
// ----------------------------------------------------------------------------
console.log("--- 2. INDICADORES CON CICLOS ---");
console.log("Valor primera venta  :", valorVenta(ventas[0]));
console.log("Total vendido        :", totalV);
console.log("Total unidades       :", unidadesV);
console.log("Venta mayor valor    :", ventaMayor(ventas));
console.log("Ventas en Medellín   :", ventasPorCiudad(ventas, "Medellín"));
console.log("Promedio por unidad  :", Math.round(ticketPromedio(unidadesV, totalV)));
console.log();

// ----------------------------------------------------------------------------
// 3. AGRUPACIONES Y RANKINGS CON MÉTODOS DE ARREGLO
// ----------------------------------------------------------------------------
console.log("--- 3. AGRUPACIONES Y T  OP K CON MÉTODOS ---");
console.log("Ventas válidas       :", ventasValidas(ventas));
console.log("Resumen de ventas    :", ventasTotales);
console.log("Total por ciudad ($):");
console.table(ventasPorCiudadM(ventas));
console.log("Unidades por producto:");
console.table(unidadesPorProducto(ventas));
console.log("Top 3 productos ($)  :");
console.table(topProductosPorValorOrdenado(topProdValor(ordenado)));
console.log("Unidades por fecha   :");
console.table(ventasDelDia(ventas));
console.log();

// ----------------------------------------------------------------------------
// 4. VERIFICACIÓN DE INMUTABILIDAD
// ----------------------------------------------------------------------------
console.log("--- 4. VERIFICACIÓN DEL ARREGLO ORIGINAL ---");
console.log("¿Sigue teniendo 12 registros? :", ventas.length === 12);
console.log("¿El primero sigue siendo ID 1?:", ventas[0].id === 1);
console.log("==============================================================");