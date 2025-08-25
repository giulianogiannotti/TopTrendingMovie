# Microservicio de Películas en Tendencia

Este microservicio permite obtener una película en tendencia de manera aleatoria utilizando la API de [The Movie Database (TMDb)](https://www.themoviedb.org/). Se conecta a la API de TMDb y devuelve solo el título de una película al azar de las tendencias semanales.

## Tecnología utilizada

* **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
* **Express.js**: Framework minimalista para construir APIs y servidores web en Node.js.
* **Fetch API** (nativa o `node-fetch` si fuera necesario): Para realizar solicitudes HTTP a la API externa.

## Instalación

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

2. Instalar dependencias:

```bash
npm install express
# npm install node-fetch (descomentar si se usa node-fetch)
```

3. Configurar la variable de entorno `PORT` si deseas un puerto diferente (opcional, por defecto 3000).

## Uso

1. Iniciar el servidor:

```bash
node index.js
```

2. Acceder al endpoint:

```
GET http://localhost:3000/trending
```

Ejemplo de respuesta:

```json
{
  "title": "Movie Title"
}
```

## Funcionamiento

* El microservicio hace una solicitud GET a la API de TMDb para obtener las películas y series más populares de la semana.
* Selecciona una película o serie al azar.
* Devuelve únicamente el título en formato JSON.

## Errores comunes

* **404**: No se encontraron películas en tendencia.
* **500**: Error al comunicarse con la API de TMDb.
