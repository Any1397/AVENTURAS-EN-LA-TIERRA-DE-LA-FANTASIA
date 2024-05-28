async function consultar() {
    const coleccion = document.getElementById('coleccion').value;
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Consultando...</p>';

    try {
        const resultado = await obtenerDatos(coleccion);

        // Filtrar los resultados según la búsqueda
        const resultadoFiltrado = resultado.filter(item =>
            item.nombre.toLowerCase().includes(busqueda)
        );

        // Mostrar resultado
        resultadoDiv.innerHTML = `<h3>Resultados de la colección: ${coleccion}</h3>`;
        if (resultadoFiltrado.length > 0) {
            resultadoFiltrado.forEach(item => {
                resultadoDiv.innerHTML += `<pre>${JSON.stringify(item, null, 2)}</pre>`;
            });
        } else {
            resultadoDiv.innerHTML += '<p>No se encontraron resultados.</p>';
        }
    } catch (error) {
        resultadoDiv.innerHTML = '<p>Error al realizar la consulta.</p>';
    }
}

// Función simulada para obtener datos
async function obtenerDatos(coleccion) {
    const datos = {
        personajes: [
            {
                Nombre: Aventurero
Historia: Un valiente guerrero en busca de aventuras y
tesoros.
Habilidades especiales: Golpe de Espada y Defensa Mágica
Velocidad movimiento: Normal

            },
            {
                Nombre: Mago
historia: Un poderoso mago en busca de conocimiento y
poder.
Habilidades especiales: Bola de Fuego y Escudo de Energía
Velocidad de movimiento: Lento

        ],
        enemigos: [
            {
                Nombre: Esqueleto
Nivel o dificultad: Fácil
Tipo de ataque: Golpe con Huesos

            },
            {
                nombre: Orco
nivel o dificultad: Medio
tipo de ataque: Golpe de Garrote

            }
        ],
        objetos: [
            {
                Nombre: Espada
Tipo: Arma
Rareza: Común
Efecto especial: Incrementa el ataque en 10 puntos

            },
            {
                Nombre: Poción de Salud
Tipo: Consumible
Rareza: Común
Efecto especial: Recupera 20 puntos de vida

            }
        ],
        escenarios: [
            {
                Nombre: Bosque Encantado
Descripción: Un bosque mágico lleno de criaturas místicas.
Nivel recomendado: 1
Enemigos presentes: Duendes y Hadas

            },
            {
                Nombre: Montañas Heladas
Descripción: Unas montañas cubiertas de nieve y hielo
Nivel recomendado: 2
Enemigos presentes: Yetis y Lobos de Hielo

            }
        ],
        usuarios: [
            {
               Nombre: Jugador 1
edad: 25
Nivel actual: 1
Monedas: 100
Puntos vida: 100
Registro de compras: Espada y Poción de Salud
Inventario: Espada y Poción de Salud

            },
            {
                Nombre: Jugador 2
edad: 30
Nivel actual: 2
Monedas: 150
Puntos vida: 80
Registro de compras: Espada
Inventario: Espada

            }
        ]
    };

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(datos[coleccion]);
        }, 1000);
    });
}
