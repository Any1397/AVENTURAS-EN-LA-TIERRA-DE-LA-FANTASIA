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
                nombre: "Aventurero",
                historia: "Un valiente guerrero en busca de aventuras y tesoros.",
                habilidades_especiales: ["Golpe de Espada", "Defensa Mágica"],
                velocidad_movimiento: "Normal"
            },
            {
                nombre: "Mago",
                historia: "Un poderoso mago en busca de conocimiento y poder.",
                habilidades_especiales: ["Bola de Fuego", "Escudo de Energía"],
                velocidad_movimiento: "Lento"
            }
        ],
        enemigos: [
            {
                nombre: "Esqueleto",
                nivel_dificultad: "Fácil",
                tipo_ataque: "Golpe con Huesos"
            },
            {
                nombre: "Orco",
                nivel_dificultad: "Medio",
                tipo_ataque: "Golpe de Garrote"
            }
        ],
        objetos: [
            {
                nombre: "Espada",
                tipo: "Arma",
                rareza: "Común",
                efecto_especial: "Incrementa el ataque en 10 puntos"
            },
            {
                nombre: "Poción de Salud",
                tipo: "Consumible",
                rareza: "Común",
                efecto_especial: "Recupera 20 puntos de vida"
            }
        ],
        escenarios: [
            {
                nombre: "Bosque Encantado",
                descripcion: "Un bosque mágico lleno de criaturas místicas.",
                nivel_recomendado: 1,
                enemigos_presentes: ["Duendes", "Hadas"]
            },
            {
                nombre: "Montañas Heladas",
                descripcion: "Unas montañas cubiertas de nieve y hielo.",
                nivel_recomendado: 2,
                enemigos_presentes: ["Yetis", "Lobos de Hielo"]
            }
        ],
        usuarios: [
            {
                nombre: "Jugador1",
                edad: 25,
                nivel_actual: 1,
                monedas: 100,
                puntos_vida: 100,
                registro_compras: ["Espada", "Poción de Salud"],
                inventario: ["Espada", "Poción de Salud"]
            },
            {
                nombre: "Jugador2",
                edad: 30,
                nivel_actual: 2,
                monedas: 150,
                puntos_vida: 80,
                registro_compras: ["Espada"],
                inventario: ["Espada"]
            }
        ]
    };

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(datos[coleccion]);
        }, 1000);
    });
}
