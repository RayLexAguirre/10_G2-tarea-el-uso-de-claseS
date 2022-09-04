![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
>Kennedy Space Center, Florida, USA. The Space Shuttle Challenger launching from Complex 39. Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a href="/t/history?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
# Tarea: Uso de clases

El objetivo de este ejercicio es practicar el uso de clases para:

- Reutilización de código
- Creación de _nuevos tipos de datos_.

## Requerimientos funcionales

1. (15 Puntos) Programar la clase `DueDate`. Deberá incluir los siguientes:
   - Atributos:
     - `Number day`  el número de día de la fecha de caducidad. Por ejemplo 4, 20, 30
     - `String month`  el mes de la fecha de caducidad utilizando las siglas iniciales del mes. Por ejemplo: ene, Feb, MAR, Abr, May, etc.
     - `Number year` el año de la fecha de caducidad. Por ejemplo: 2021, 2022.
   - Métodos
     - `constructor()` recibe valores iniciales para `day`, `month` y `year`.
     - `hasExpired()` regresa `true` si ya expiró, es decir si la fecha establecida es menor que la actual ó `false` si no ha expirado, es decir la fecha establecida es mayor o igual a la actual.
     - `daysToExpire()` regresa el número de dias para que se llegue a la fecha de caducidad, si ya caducó regresa -1

2. (15 puntos) Programar la clase `Product`. Deberá incluir los siguientes:
   - Atributos:
     - `Number id` numero de identificación del producto. Por ejemplo: 23
     - `String name` nombre del producto: Por ejemplo: Harina
     - `Number price` costo de este producto por unidad en pesos. Por ejemplo: 200
     - `DueDate dueDate` fecha de expiración o caducidad de este producto: Por ejemplo: 20 de Enero el 2021
     - `String units` nombre de la unidad de medida para este ingrediente: Por ejemplo: Kilo
   - Métodos
     - `constructor()` recibe valores iniciales para `id`, `name`, `price`, `dueDate` y `units`.
     - `getId()` regresa el `id` de este producto
     - `getName()` regresa nombre del producto. La primer letra debe estar en mayúsculas y todas las demás en minúsculas como en los siguientes ejemplos: Mantequilla, Sal de mar, Granos de elote.
     - `getPrice()` regresa el `price` del producto.
     - `hasExpired()` regresa `true` si ya expiró, es decir si ya pasó la fecha de caducidad o `false` si no ha caducado.
     - `daysToExpire()` regresa el número de días para que se llegue a la fecha de caducidad, si ya caducó regresa -1
     - `getUnits()` regresa nombre de la unidad. La primer letra debe estar en mayúsculas y todas las demás en minúsculas como en los siguientes ejemplos: Kilo, Litro, Pieza.

3. (35 puntos) Programar la clase `Ingredient`. Deberá incluir los siguientes:
   - Atributos:
     - `Product product` producto a utilizar como ingrediente.
     - `Number amount` cantidad requerida de ese producto.
   - Métodos
     - `constructor()` recibe valores iniciales para `productId` y `amount`.
     - `getName()` regresa el nombre del producto
     - `getProductId()` regresa el id del producto
     - `getAmount()` regresa la cantidad.
     - `getAmountFormatted()` regresa un string con la cantidad formateada como se muestra en los siguientes ejemplos:  .24 Kilos, 5 Litros, 2 piezas
     - `getCost()` regresa el costo de ese ingrediente. El costo del ingrediente se determina multiplicando el `amount` del ingrediente por el `price` del producto. Por ejemplo si `amount=.24` y `price=1000` entonces la función regresará 240.
     - `hasExpired()` regresa `true` si el producto de este ingrediente ya expiro o `false`  si no ha expirado.
     - `daysToExpire()`  regresa el número de días que faltan para que el producto de este ingrediente expire ó -1 si ya expiró.

4. (35 puntos) Programar la clase `Recipe`. Deberá incluir los siguientes:
   - Atributos:
     - `String name` nombre de la receta.
     - `Ingredient[] ingredients` vector que contiene todos los ingredientes de la receta.
   - Métodos
     - `constructor()` recibe valores iniciales para `name`.
     - `addIngredient(ingredient)` si el ingrediente no está en esta receta se agrega como nuevo, pero si ya existe se reemplaza. Se puede decir que dos ingredientes son el mismo si utilizan el mismo productId
     - `removeIngredient(productId)` elimina el ingrediente de la receta y regresa `true` en caso de que el ingrediente indicado no exista en la receta regresa `false`
     - `getNumberOfIngredients()` regresa el número de ingredientes que tiene esta receta.
     - `getCost()` regresa el costo total de los ingredientes que contiene esta receta.
     - `getList()` regresa un vector con la lista de ingredientes que contiene esta receta. Cada ingrediente se regresará como un string formateado como se muestra en los siguientes ejemplos: 0.5 Kilos de Jitomate ($30 pesos) expirado, 2 Cabezas de Ajo (5 pesos) 5 días para expirar, 0.1 Litros de Agua (1 pesos) 1 días para expirar

## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
