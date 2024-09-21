# Vue 3 Fake Store API App

Este proyecto es una aplicación simple en Vue 3 que consume la [Fake Store API](https://fakestoreapi.com/docs) para emular la funcionalidad de una tienda en línea. Se incluyen páginas para mostrar productos, detalles de productos y una sección de créditos.

## Características

- Listado de productos consumiendo datos desde la API de Fake Store.
- Visualización de detalles de productos individuales.
- Página de créditos.
- Enrutamiento básico usando `vue-router`.

## Tecnologías utilizadas

- **Vue 3**: Framework JavaScript progresivo para la construcción de interfaces de usuario.
- **Vue Router**: Para gestionar el enrutamiento entre las diferentes vistas de la aplicación.
- **Fake Store API**: API pública que simula datos de una tienda en línea.

## Estructura del proyecto

```bash
├── public
├── src
│   ├── assets          # Archivos estáticos como imágenes o íconos
│   ├── components      # Componentes reutilizables de Vue
│   ├── pages           # Vistas de las páginas principales de la app
│   │   ├── home.vue    # Página principal donde se listan los productos
│   │   ├── detail.vue  # Página de detalles del producto
│   │   └── credits.vue # Página de créditos
│   ├── router          # Archivo de rutas de la aplicación
│   ├── services        # Servicios para consumir la API
│   ├── store           # Estado global (si aplica)
│   └── App.vue         # Componente principal de Vue
└── README.md
```

## Instalación

1. Clona el repositorio.

   git clone https://github.com/21harley/prueba_tecnica_vue

2. Navega al directorio del proyecto.

   cd nombre-repositorio

3. Instala las dependencias.

   npm install

4. Inicia el servidor de desarrollo.

   npm run dev

5. Abre el navegador en http://localhost:3000 para ver la aplicación.

## Rutas

Las rutas principales definidas en src/router/index.js:

- `/` : Página principal (Home) que lista los productos.
- `/details/:id` : Página de detalles de un producto específico.
- `/credits` : Página de créditos de la aplicación.

## Consumo de la API

Se utiliza la Fake Store API para obtener datos de productos como el nombre, descripción, precio e imagen. Estos datos se muestran en la página principal y en la vista de detalles del producto.

## Ejemplo de uso de la API

En el archivo home.vue, se utiliza un servicio para consumir la API:

```javascript
import { ref, onMounted } from 'vue';
import { fullProducts } from './../../services/home.service';

const products = ref([]);

onMounted(() => {
  fullProducts(products);
});


