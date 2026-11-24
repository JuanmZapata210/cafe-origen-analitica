# Bitácora de Análisis - Café Origen v0.1

## 1. Diccionario de datos (Minirreto 1)

| Propiedad | Tipo de dato | Significado |
| :--- | :--- | :--- |
| `id` | `number` | Identificador único de la venta. |
| `fecha` | `string` | Fecha de la venta en formato `AAAA-MM-DD`. |
| `cliente` | `string` | Código del cliente (`C01` a `C08`). Un cliente puede repetirse en varias ventas. |
| `producto` | `string` | Nombre del producto vendido, con su presentación cuando aplica. |
| `ciudad` | `string` | Ciudad asociada a la venta. |
| `cantidad` | `number` | Unidades vendidas en el registro. |
| `precio` | `number` | Precio unitario del producto en pesos colombianos (COP). |

---

## 2. Casos borde detectados en los datos (Minirreto 1)

### Hallazgo 1:
- **Descripción**: La venta con `id: 8` tiene `cantidad: 0`, es decir, un registro sin unidades vendidas.
- **¿Cómo se debe tratar en el análisis?**: Se excluye de los conteos y de las unidades (por ejemplo con `ventasValidas`, que filtra `cantidad > 0`). En los totales en dinero aporta `0`, así que no los altera. En las ventas por fecha suma `0` unidades y no afecta el resultado de ese día.

### Hallazgo 2:
- **Descripción**: `precio` es el valor unitario, no el total de la venta.
- **¿Cómo se debe tratar en el análisis?**: El valor de cada venta se calcula como `cantidad * precio` (función `valorVenta`) antes de sumar o comparar. Sumar solo los precios daría un resultado incorrecto.

---

## 3. Patrones con ciclos manuales (Minirreto 2)

- **`totalVendido(ventas)`**:
  - *Patrón usado (contador, acumulador, filtro, extremo)*: Acumulador. Una variable `total` arranca en `0` y suma el valor de cada venta.
- **`unidadesVendidas(ventas)`**:
  - *Patrón usado*: Acumulador con filtro. Suma `cantidad` solo cuando es mayor que `0`.
- **`ventaMayor(ventas)`**:
  - *Patrón usado*: Extremo. `mayor` arranca con la primera fila y se reemplaza por la fila completa cuando `cantidad * precio` es mayor.
- **`ventasPorCiudad(ventas, ciudad)`**:
  - *Patrón usado*: Filtro más acumulador. Se queda con las ventas de la ciudad pedida (comparando sin tildes ni mayúsculas) y suma su valor (`cantidad * precio`).
- **`ticketPromedio(unidades, total)`**:
  - *Patrón usado*: Acumulador seguido de una división. Se calcula el total vendido y se divide entre las unidades.

---

## 4. Del ciclo al método: Preguntas de transformación y agrupación (Minirreto 3)

- **¿Qué filtro? (`.filter`)**: Las ventas válidas (`cantidad > 0`), con la función `ventasValidas`.
- **¿Qué transformo? (`.map`)**: Cada venta en su valor total (`cantidad * precio`), lo que genera el arreglo `ventasTotales`.
- **¿Qué reduzco / acumulo? (`.reduce`)**: El total vendido, el total de unidades y los totales por ciudad, producto y fecha.
- **¿Cómo agrupo en un diccionario?**: Con `reduce` y un objeto vacío `{}` como valor inicial. Para cada venta se usa su ciudad (o producto, o fecha) como clave. Si la clave no existe todavía, se crea en `0`, y luego se le suma el valor.
- **¿Cómo ordeno sin modificar el arreglo original? (`.sort`)**: `sort` modifica el arreglo sobre el que se llama, así que no se aplica sobre `ventas`. Con `Object.entries(...)` se crea un arreglo nuevo a partir del diccionario de valor por producto, y sobre ese arreglo nuevo se aplica `.sort((a, b) => b[1] - a[1])`. Luego `slice(0, 3)` toma el top 3. Para ordenar `ventas` directamente se usaría una copia: `[...ventas].sort(...)`.

---

## 5. Verificación del reporte y pureza de funciones (Minirreto 4)

- **¿Cómo comprobaste que el arreglo `ventas` original no fue modificado?**: Al final del reporte se imprime si `ventas.length === 12` y si `ventas[0].id === 1`. Ambas deben dar `true`. Las funciones usan `map`, `filter` y `reduce` (que no modifican el arreglo original) y el ordenamiento se hace sobre un arreglo nuevo creado con `Object.entries`.
- **Comando para ejecutar el reporte**: `node src/reporte.js`