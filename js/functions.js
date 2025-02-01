var contador = 0;

function cellClick(celda){
    if (window.getComputedStyle(celda).backgroundImage =="none") {
        if(contador<8){
        celda.style = `background-image:url(./img/reina.png);
                    background-size:50px;
                    background-repeat:no-repeat;   
                    background-position:center;`;
        contador++;}           
    } else {
        celda.style = `background-image:none;`;
        contador--;
    }
    
}

function cambiarCelda(r, c) {
    var celda = document.getElementById("tablero");
    var r1 = r, c1 = c; // Diagonal inferior derecha
    var r2 = r, c2 = c; // Diagonal superior derecha
    var r3 = r, c3 = c; // Diagonal inferior izquierda
    var r4 = r, c4 = c; // Diagonal superior izquierda

    for (let i = 0; i < 8; i++) {
        // Línea horizontal
        celda.rows[r].cells[i].style.backgroundColor = "RED";

        // Línea vertical
        celda.rows[i].cells[c].style.backgroundColor = "RED";

        // Diagonal inferior derecha
        if (r1 + 1 < 8 && c1 + 1 < 8) {
            celda.rows[++r1].cells[++c1].style.backgroundColor = "RED";
        }

        // Diagonal superior derecha
        if (r2 - 1 >= 0 && c2 + 1 < 8) {
            celda.rows[--r2].cells[++c2].style.backgroundColor = "RED";
        }

        // Diagonal inferior izquierda
        if (r3 + 1 < 8 && c3 - 1 >= 0) {
            celda.rows[++r3].cells[--c3].style.backgroundColor = "RED";
        }

        // Diagonal superior izquierda
        if (r4 - 1 >= 0 && c4 - 1 >= 0) {
            celda.rows[--r4].cells[--c4].style.backgroundColor = "RED";
        }
    }
}

function limpiarCelda(){
    var celdas = document.getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) celdas[i].style.backgroundColor = "";
}

function cambiarSolucion() {
    var solucion = document.getElementById("solucionSelect").value;
    
    // Limpiar el tablero antes de aplicar una nueva solución
    limpiarTablero();

    if (solucion === "solucion1") {
        solucionUno();
    } else if (solucion === "solucion2") {
        solucionDos();
    } else if (solucion === "solucion3") {
        solucionTres();
    }
}

function solucionUno(){
    var estilo = `background-image:url(./img/reina.png);
                  background-size:50px;
                  background-repeat:no-repeat;   
                  background-position:center;`;
    
    var celdas = document.getElementById("tablero");
    celdas.rows[0].cells[3].style = estilo;
    celdas.rows[1].cells[6].style = estilo;
    celdas.rows[2].cells[2].style = estilo;
    celdas.rows[3].cells[7].style = estilo;
    celdas.rows[4].cells[1].style = estilo;
    celdas.rows[5].cells[4].style = estilo;
    celdas.rows[6].cells[0].style = estilo;
    celdas.rows[7].cells[5].style = estilo;
}

function solucionDos(){
    var estilo = `background-image:url(./img/reina.png);
                  background-size:50px;
                  background-repeat:no-repeat;   
                  background-position:center;`;
    
    var celdas = document.getElementById("tablero");
    celdas.rows[0].cells[4].style = estilo;
    celdas.rows[1].cells[1].style = estilo;
    celdas.rows[2].cells[3].style = estilo;
    celdas.rows[3].cells[6].style = estilo;
    celdas.rows[4].cells[2].style = estilo;
    celdas.rows[5].cells[7].style = estilo;
    celdas.rows[6].cells[5].style = estilo;
    celdas.rows[7].cells[0].style = estilo;
}

function solucionTres(){
    var estilo = `background-image:url(./img/reina.png);
                  background-size:50px;
                  background-repeat:no-repeat;   
                  background-position:center;`;
    
    var celdas = document.getElementById("tablero");
    celdas.rows[0].cells[3].style = estilo;
    celdas.rows[1].cells[1].style = estilo;
    celdas.rows[2].cells[6].style = estilo;
    celdas.rows[3].cells[2].style = estilo;
    celdas.rows[4].cells[5].style = estilo;
    celdas.rows[5].cells[7].style = estilo;
    celdas.rows[6].cells[4].style = estilo;
    celdas.rows[7].cells[0].style = estilo;
}

function reiniciarTablero() {
    // Limpiar todos los estilos del tablero
    limpiarTablero();
    
    // Restablecer el select a su valor predeterminado (---)
    document.getElementById("solucionSelect").value = "default";
}

function limpiarTablero() {
    var celdas = document.getElementById("tablero");
    for (var i = 0; i < celdas.rows.length; i++) {
        for (var j = 0; j < celdas.rows[i].cells.length; j++) {
            celdas.rows[i].cells[j].style = ""; // Limpiar los estilos
        }
    }
}