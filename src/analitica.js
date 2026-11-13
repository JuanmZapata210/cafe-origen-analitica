const ventas = require("./datos");

function valorVenta(venta) {
    return venta.precio * venta.cantidad;
}
const ventasTotales = ventas.map(v => valorVenta(v));
console.log("Las ventas totales de cada uno son: ", ventasTotales, "\n");

function totalVendido(ventas) {
    let total = 0
    for (const valor of ventas) {
        total += valor

    }
    return total
}
const totalV = totalVendido(ventasTotales)
console.log("El total vendido fue: ", totalV, "\n")

function unidadesVendidas(ventas) {
    let unidades = 0
    for (const valor of ventas) {
        if (valor.cantidad > 0) {
            unidades += valor.cantidad
        }

    }
    return unidades

}
const unidadesV = unidadesVendidas(ventas)
console.log("La cantidad de unidades vendidas fueron: ", unidadesV, "\n")

function ventaMayor(venta) {
    let mayor = venta[0]
    for (const valor of venta) {
        if (valor.cantidad * valor.precio > mayor.cantidad * mayor.precio) {
            mayor = valor
        }
    }
    return mayor

}
const mayorVenta = ventaMayor(ventas);
console.log("La mayor venta fue: ", mayorVenta, "\n")

function ticketPromedio(unidades, total) {
    let promedio = 0
    promedio = total / unidades
    return promedio
}
const ticketProm = ticketPromedio(unidadesV, totalV)
console.log("El promedio de ventas fue: ", ticketProm, "\n")

function ventasPorCiudad(ventas) {
    const ventasCiudad = {}
    for (v of ventas) {
        if (!ventasCiudad[v.ciudad]) { ventasCiudad[v.ciudad] = 0; }
        ventasCiudad[v.ciudad] += valorVenta(v);
    }

    return ventasCiudad
}
console.log("Las ventas por cada ciudad son: ", ventasPorCiudad(ventas), "\n")

function totalVendidoM(ventas) {
    const venta = ventas.reduce((acomulado, valor) => {
        return acomulado + valor
    }, 0)
    return venta
}
const vendidoM = totalVendidoM(ventasTotales)
console.log("el total usando REDUCE es", vendidoM, "\n")

function unidadesVendidasM(ventas) {
    const unidades = ventas.reduce((acomulador, valor) => {
        return acomulador + valor.cantidad
    }, 0)
    return unidades


}
console.log("Las unidades vendidas usando REDUCE son: ", unidadesVendidasM(ventas), "\n")

function ventasPorCiudadM(ventas) {
    return ventas.reduce((ciudadVenta, venta) => {
        if (!ciudadVenta[venta.ciudad]) {
            ciudadVenta[venta.ciudad] = 0;
        }
        ciudadVenta[venta.ciudad] += valorVenta(venta)
        return ciudadVenta;
    }, {})
}
console.log("Las ventas por ciudad usando REDUCE es: ", ventasPorCiudadM(ventas))

