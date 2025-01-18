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
