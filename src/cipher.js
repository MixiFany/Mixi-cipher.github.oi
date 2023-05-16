


function inicio() {
  document.getElementById('encode').addEventListener('click', function () {
    const texto = document.getElementById('string').value;
    const desplazamiento = document.getElementById('offset').value;
    document.getElementById('output').value = cifrar(texto, desplazamiento);
    document.getElementById('string2').value = cifrar(texto, desplazamiento);
  }, true);
  document.getElementById('decode').addEventListener('click', function () {
    const texto2 = document.getElementById('string2').value;
    const desplazamiento2 = document.getElementById('offset2').value;
    document.getElementById('output2').value = descifrar(texto2, desplazamiento2);
  }, true);
}

function cifrar(texto, desplazamiento) {
  let letra, resultado = " ";
  desplazamiento %=26; // modulo de 26, o sea que cada 26 vuelva a 1
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
  let cifrado = alfabeto.slice(+desplazamiento); 
  cifrado = cifrado + alfabeto.slice(0, desplazamiento); // que se vaya a la derecha//
  for (let i = 0; i < texto.length; i++) { // bucle for, las letras empiezan en 0 y el largo es 25, repetir //
    letra = texto[i]; // toma del alfabeto las letras del string //     
    if (letra === ' '){
      letra = ' ';
    } else { // obtener la posicion de la letra en el afabeto //
      const posicionOriginal = alfabeto.indexOf(letra); 
      // obtener la nueva posicion de letra cifrada del alfabeto nuevo//
      letra = cifrado[posicionOriginal] || letra;
    }
    resultado += letra; // enviamos la letra cifrada 
  }
  return resultado;
}

function descifrar( texto2, desplazamiento2) {
  let letra, resultado = " ";
  desplazamiento2 %=26; // modulo de 26, o sea que cada 26 vuelva a 1
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let descifrado = alfabeto.slice(-desplazamiento2);
  descifrado = descifrado + alfabeto.slice(0, alfabeto.length - desplazamiento2); // que se vaya a la izquierda//
  for (let i = 0; i < texto2.length; i++) { // bucle for, las letras empiezan en 0 y el largo es 25, repetir //
    letra = texto2[i]; // toma del alfabeto las letras del string //
    if (letra === ' '){
      letra = ' ';
    } else { // obtener la posicion de la letra en el afabeto //
      const posicionOriginal = alfabeto.indexOf(letra); 
      // obtener la nueva posicion de letra cifrada del alfabeto nuevo//
      letra = descifrado[posicionOriginal] || letra;
    }
    resultado += letra; // enviamos la letra cifrada 
  }
  return resultado;
}

inicio()

