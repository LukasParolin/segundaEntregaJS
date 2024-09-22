const tiposDeRostro = ["cuadrado", "redondo", "ovalado", "triangular"]

const cortesRecomendados = [
    ["Corte al rape", "Corte con textura", "Corte con volumen en la parte superior"], // 0
    ["Corte en capas", "Corte con flequillo hacia un lado", "Corte con laterales cortos y largo arriba"], // 1
    ["Corte clásico", "Corte peinado hacia atrás", "Corte con degradado alto"], // 2
    ["Corte con volumen en los lados", "Corte con flequillo", "Corte con estilo despeinado"] // 3
]


document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('tipoRostro')
    const tipoRostroGuardado = localStorage.getItem('tipoRostro')
    
    if (tipoRostroGuardado !== null) {
        select.value = tipoRostroGuardado;
        const cortes = obtenerCortesRecomendados(parseInt(tipoRostroGuardado));
        mostrarCortes(cortes)
    }
})

document.getElementById('verCortes').addEventListener('click', function() {
    const select = document.getElementById('tipoRostro')
    const indice = parseInt(select.value)
    

    localStorage.setItem('tipoRostro', indice)

    const cortes = obtenerCortesRecomendados(indice)
    mostrarCortes(cortes)
});

function obtenerCortesRecomendados(indice) {
    if (indice >= 0 && indice < cortesRecomendados.length) {
        return cortesRecomendados[indice]
    } else {
        return null
    }
}

function mostrarCortes(cortes) {
    const listaCortes = document.getElementById('listaCortes')
    listaCortes.innerHTML = ''
    if (cortes) {
        cortes.forEach(function(corte) {
            const li = document.createElement('li')
            li.textContent = corte
            listaCortes.appendChild(li)
        })
    } else {
        const li = document.createElement('li')
        li.textContent = 'No se encontraron cortes recomendados.'
        listaCortes.appendChild(li)
    }
}