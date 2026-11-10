## Diccionario de datos

| Propiedad | Tipo | Significado |
|---|---|---|
| `id` | `number` | Identificador único de la venta. |
| `fecha` | `string` | Fecha de la venta. |
| `cliente` | `string` | Código del cliente. |
| `producto` | `string` | Nombre del producto vendido. |
| `ciudad` | `string` | Ciudad asociada a la venta. |
| `cantidad` | `number` | Unidades vendidas en el registro. |
| `precio` | `number` | Precio unitario del producto. |


**Casos borde detectados**
- En clientes hay varios clientes que se repiten y que no tienen el mismo Id.
- En el Id#8 se tiene cantidad 0 de ventas 
