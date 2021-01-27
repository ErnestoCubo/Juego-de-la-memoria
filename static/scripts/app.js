$(document).ready(function () {
    var numClicks = 0;
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var random = randomizar(numeros);
    var start = rellenarTablero(random, 0);
    var random = randomizar(numeros);
    var path = "../static/images/";
    var valor1 = 0;
    var valor2 = 0;
    var seleccion1 = 0;
    var seleccion2 = 0;
    var selecciones = 0;

    rellenarTablero(random, start);

    $(".btn").click(function (e) { 
        e.preventDefault();
        location.reload();
    });    

    $(".ecItem").click(function () { 
        if(selecciones == 0){
        seleccion1 = $(this).children();
        valor1 = seleccion1.attr("value");
        seleccion1.attr("src", path.concat(valor1, ".jpg"));
        selecciones++;
        }
        else if(selecciones<2){
            seleccion2 = $(this).children();
            valor2 = seleccion2.attr("value");
            seleccion2.attr("src", path.concat(valor2, ".jpg"));
            selecciones++;
        }
        else{
            if(valor1 == valor2){
                selecciones=0;
            }
            else{
                seleccion1.attr("src", path.concat("image-cover-75.jpg"));
                seleccion2.attr("src", path.concat("image-cover-75.jpg"));
                selecciones=0;
            }
        }
    });
});

function rellenarTablero(array, start) {
    var cont = 0;
    var index = 0;

    for (index = start; cont < 16; index++) {
        if($("#ec"+index).children().attr("value")!=0){
            $("#ec"+index).children().attr("value", array[cont]);
            cont++;
        }
    }
    return index - 1;
}

function randomizar(array){
    var i = array.length;
    var j = 0;
    var temp = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}