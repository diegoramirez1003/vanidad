var teclado = {
  "2": "ABC",
  "3": "DEF",
  "4": "GHI",
  "5": "JKL",
  "6": "MNO",
  "7": "PQRS",
  "8": "TUV",
  "9": "WXYZ"
};

// Convierte un nombre en numero. Ejemplo: DIEGO -> 34346
function nombreANumero(nombre) {
  var resultado = "";
  nombre = nombre.toUpperCase();

  for (var i = 0; i < nombre.length; i++) {
    var letra = nombre[i];

    // buscamos la letra en cada numero del teclado
    for (var numero in teclado) {
      if (teclado[numero].indexOf(letra) !== -1) {
        resultado = resultado + numero;
      }
    }
  }
  return resultado;
}

// Convierte un numero en todos los nombres posibles. Ejemplo: 234 -> ADG, ADH, ...
function numeroANombres(numero) {
  var lista = [""];

  for (var i = 0; i < numero.length; i++) {
    var letras = teclado[numero[i]];
    var nuevaLista = [];

    for (var j = 0; j < lista.length; j++) {
      for (var k = 0; k < letras.length; k++) {
        nuevaLista.push(lista[j] + letras[k]);
      }
    }
    lista = nuevaLista;
  }
  return lista;
}

// Funcion principal: recibe algo como "0-800-DIEGO" o "0-500-2252445"
function vanidad(entrada) {
  entrada = entrada.replace(/ /g, "");        // quitamos los espacios
  var posicion = entrada.lastIndexOf("-");
  var prefijo = entrada.substring(0, posicion + 1);   // ejemplo: 0-800-
  var resto = entrada.substring(posicion + 1);        // ejemplo: DIEGO

  if (isNaN(resto)) {
    // tiene letras, entonces se convierte a numero
    console.log("Salida: " + prefijo + nombreANumero(resto));
  } else {
    // son solo numeros, entonces se muestran los nombres posibles
    var nombres = numeroANombres(resto);
    console.log("Combinaciones posibles: " + nombres.length);
    for (var i = 0; i < nombres.length && i < 20; i++) {
      console.log(prefijo + nombres[i]);
    }
  }
}

// Pruebas
vanidad("0-800-DIEGO");
vanidad("0-500-2252445");
