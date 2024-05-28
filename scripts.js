async function consultar() {
    const coleccion = document.getElementById('coleccion').value;
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Consultando...</p>';

    try {
        const resultado = await obtenerDatos(coleccion);

        // Filtrar los resultados seg�n la b�squeda
        const resultadoFiltrado = resultado.filter(item =>
            item.nombre.toLowerCase().includes(busqueda)
        );

        // Mostrar resultado
        resultadoDiv.innerHTML = `<h3>Resultados de la colecci�n: ${coleccion}</h3>`;
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

// Funci�n simulada para obtener datos
async function obtenerDatos(coleccion) {
    const datos = {
        personajes: [
            {
                nombre: "Aventurero",
                historia: "Un valiente guerrero en busca de aventuras y tesoros.",
                habilidades_especiales: ["Golpe de Espada", "Defensa M�gica"],
                velocidad_movimiento: "Normal"
            },
            {
                nombre: "Mago",
                historia: "Un poderoso mago en busca de conocimiento y poder.",
                habilidades_especiales: ["Bola de Fuego", "Escudo de Energ�a"],
                velocidad_movimiento: "Lento"
            }
        ],
        enemigos: [
            {
                nombre: "Esqueleto",
                nivel_dificultad: "F�cil",
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
                rareza: "Com�n",
                efecto_especial: "Incrementa el ataque en 10 puntos"
            },
            {
                nombre: "Poci�n de Salud",
                tipo: "Consumible",
                rareza: "Com�n",
                efecto_especial: "Recupera 20 puntos de vida"
            }
        ],
        escenarios: [
            {
                nombre: "Bosque Encantado",
                descripcion: "Un bosque m�gico lleno de criaturas m�sticas.",
                nivel_recomendado: 1,
                enemigos_presentes: ["Duendes", "Hadas"]
            },
            {
                nombre: "Monta�as Heladas",
                descripcion: "Unas monta�as cubiertas de nieve y hielo.",
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
                registro_compras: ["Espada", "Poci�n de Salud"],
                inventario: ["Espada", "Poci�n de Salud"]
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
