const express = require('express');
//const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint para obtener una película en tendencia al azar
app.get('/trending', async (req, res) => {
    const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=62e9afa9b26ec1658e4f7c572663a19b&language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer 62e9afa9b26ec1658e4f7c572663a19b'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Obtener una película aleatoria de los resultados
        const movies = data.results;
        if (!movies || movies.length === 0) {
            return res.status(404).json({ message: 'No trending movies found' });
        }

        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];

        // Solo devolver el nombre de la película
        res.json({ title: randomMovie.title });
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        res.status(500).json({ message: 'Error fetching trending movies' });
    }
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});