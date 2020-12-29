## Web app de productos utilizando la API de 
# Mercado Libre 🙌

[MeLi API](https://api.mercadolibre.com/sites/MLA)

Esta aplicacion consta de tres componentes principales: la caja de busqueda, la visualizacion de resultados y la descripcion del del detalle del producto.

## Correr la aplicacion en local 

Ejecuta npm install para instalar las dependencias

```bash
npm install
```
Ejectutar el cliente

```bash
npm run dev
```

Ejectutar el servidor

```bash
npm start
```
Ejectutar los dos gracias [Concurrently](https://www.npmjs.com/package/concurrently "Concurrently")

```bash
npm run watch
```
Ejecutar build de produccion

```bash
npm run build
```

# Descripcion de lo realizado ✌

## Problema

Se solicito realizar los tres componentes mencionados en la intro donde se podria ingresar un producto a buscar, al enviar el formulario deberia navegar a los resultados de la busqueda, visualizando solo 4 productos. Luego al hacer click sobre uno de ellos deberia navegar a la vista del detalle, ademas si se ingresa dado un id de producto, deberia poder ingresar directamente a la vista de su detalle.

## Solucion

Para el **cliente** de la aplicacion se utilizo React con Webpack desde 0 para utilizar solo las librerias necesarias, ademas de ReactRouter para las rutas dinamicas, el estado se manejo casi en su totalidad con el API Context para disponibilizarlo en toda el app, Proptypes para validar los inputs de los parametros, React Helmet para incluir la metada data necesaria para el SEO y por ultimo SCSS para manejar los estilos.

* Cliente
  * React
  * Webpack
  * Context API
  * SASS con ModulosCSS porque clases hash !== override  😉
  * React Helmet (SEO)



Para el **servidor** se utilizo Node con Express que brinda una solucion rapida y facil para construccion de  Server APIs, este nos permite manejar los distintos endpoints solicitados dentro de la aplicacion, el uso de node tiene la desventaja de que corre en single thread, para solucionar esto y evitar bloqueos se uso [Cluster](https://www.npmjs.com/package/cluster "Cluster") que permite la asignacion de multiples core (**N** asignados o los disponibles en el **OS**), se hizo la prueba con TestLoad de emular request de 500 clientes y 200 repeticiones sin ver bloqueo.

* Servidor
  * NodeJS
  * Express
  * Cluster

El servidor esta deployado en Heroku para aprovechar el CICD y tener un terminal menos en el escritorio 🤷‍♂️ aca tienes la url para insomnia

		`https://meli-server.herokuapp.com/api/items`
		`https://meli-server.herokuapp.com/api/items/MLA846618954`

Aunque el servidor se encuentra en **src/server** aca te dejo el link si quieres verlo por separado [Server](https://github.com/alex-con-ruiz/MELI-challenge "Server")

## Deploy 🚀

Puedes ver la aplicacion funcionando en produccion mediante este link: [MeliApp](https://alex-con-ruiz.github.io/MELI-challenge-front/#/) .
Puedes ver ejemplo de los endpints solicitados aqui:
 * [Detalle de un producto](https://alex-con-ruiz.github.io/MELI-challenge-front/#/items/MLA879715388)
 * [Busqueda de producto](https://alex-con-ruiz.github.io/MELI-challenge-front/#/items?search=dados%20de%20rol)
 
 Si deseas probar el server deployado debo informarte que Heroku pone en sleep los dynos y toca dar un salto de fe mientras enciende en el primer request, pero te prometo que funciona >: ). Igual el cliente en este repositorio esta apuntado al server local.

Si llegaste aqui gracias 🙏🏼 me gusta ser leido, Buen Dia!