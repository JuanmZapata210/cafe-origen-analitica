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
console.log("Las ventas por ciudad usando REDUCE es: ", ventasPorCiudadM(ventas), "\n")

function cantidadProducto(venta) {
    return venta.cantidad

}
function unidadesPorProducto(ventas) {
    return ventas.reduce((ventaProducto, venta) => {
        if (!ventaProducto[venta.producto]) {
            ventaProducto[venta.producto] = 0
        }
        ventaProducto[venta.producto] += cantidadProducto(venta)
        return ventaProducto
    }, {})

}
console.log("La cantidad por producto es: ", unidadesPorProducto(ventas), "\n")

function topProductosPorValor(ventas) {
    const resultado = ventas.reduce((valorProductos, venta) => {
        if (!valorProductos[venta.producto]) {
            valorProductos[venta.producto] = 0
        }
        valorProductos[venta.producto] += valorVenta(venta)
        return valorProductos
    }, {})
    return resultado
}
const valorProducto = topProductosPorValor(ventas)
console.log("El valor por producto es: ", valorProducto, "\n")

const ordenado = Object.entries(valorProducto).sort((a, b) => b[1] - a[1])

function topProdValor(arregloordenado){
    const top = arregloordenado.slice(0,3)
    return top

}
const topProducto = topProdValor(ordenado)

function topProductosPorValorOrdenado(orden) {
    let resultado = {}
    for (const element of orden) {
        resultado[element[0]] = element[1];
    }
    return resultado

}
console.log("El top 3 de productos por su valor es: ", topProductosPorValorOrdenado(topProducto))




