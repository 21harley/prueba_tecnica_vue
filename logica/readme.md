### Prueba de algoritmia

## Objetivos
El objetivo de esta prueba es determinar la habilidad del evaluado en algoritmia, su capacidad para comprender problemas con información confusa, detectar problemas ocultos, y seguir condiciones de entrega concretas.

## Reglas
 - Está permitido usar cualquier IDE
 - Se puede usar cualquier lenguaje de programación de alto nivel.
 - El algoritmo está pensado para consola, pero se pueden usar controles visuales que reciban texto y un botón para ejecutar el algoritmo, así como un campo de texto multilínea para visualizar la respuesta del algoritmo.
 - El algoritmo debe ser entregado junto con las instrucciones necesarias para su ejecución.
Todos los archivos necesarios para probar el algoritmo deberán ser presentados en un repositorio git público.
 - El algoritmo debe resolver correctamente el problema.
 - El algoritmo debe recibir los datos tal y como se indica en el problema.
 - El algoritmo debe mostrar la respuesta tal y como se indica en el problema.
 - Solo se evaluará la lógica implementada y el correcto funcionamiento del algoritmo, no es necesario diseño, ni validaciones de entrada y salida.
  
## Problema
Se requiere crear un algoritmo que busque dentro de una lista los números enteros ingresada a tiempo de ejecución que funcionara como base de datos para el ejercicio, el número más alto que sea inferior al número consultado y el número más pequeño que sea superior al número consultado. El algoritmo debe ignorar los números de la base de datos que sean iguales al número a evaluar.

## Input que debe respetar el algoritmo

El input puede ser en consola o por controles gráficos, que permitan ingresar una cadena de texto, para cada una de las partes enumeradas a continuación:

Se recibirá un número entero con el tamaño de la lista de números a evaluar.
En una línea separando por espacios se recibirá el listado de números enteros que se usará como base de datos para evaluar. (la lista siempre se ingresará de forma ordenada de menor a mayor)
Se recibirá un número entero indicando el número de consultas a evaluar.
Se ingresará una lista de números enteros separados con un espacio simple, esta lista contendrá los números a evaluar en el algoritmo.

## Output que debe respetar el algoritmo

Para cada número consultado, imprima dos números en una línea. El primero sería el número más alto que es más bajo que el número consultado, y el siguiente número sería el número más bajo que es más alto que el número ingresado. Estos dos números deben estar separados por un solo espacio. Siempre que sea imposible encontrar un número como respuesta, reemplace ese número con una 'X' mayúscula.

Ejemplo

Input

5
2 4 5 7 9
4
2 5 6 10

Output

. 
X 4
4 7
5 7
9 X

## Solución

Este problema se puede resolver usando Node.js. La ejecución del algoritmo se realiza con:

node index.js