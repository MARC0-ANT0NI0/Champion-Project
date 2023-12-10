let namesArray = [];
let player = document.getElementById('player'); //Se necesita una primera variable para capturar el elemento "player" y luego resetearlo con la función "resetName"
let name = ''; //Se necesita una segunda variable con espacio vacío y esta va a capturar el valor del mismo elemento "player" dentro de la función "savingName"

function savingName() {
    let name = document.getElementById('player').value;
    if (name.trim() !== '')   {
        namesArray.push(name);
    } else  {
        alert('Por favor ingrese un nombre valido');
    } //En la condición se usa el método "trim" que elimina los espacios en blanco al inicio y al final de la cadena de texto a la que estemos aplicando, en este caso "name". Si "name" sin espacios en blanco delante y detrás es diferente a un espacio vacío, entonces pusheamos "name" dentro de namesArray. Caso sontrario, aparece el "alert".
    console.log(namesArray);
}

const resetName = () => {
    player.value = '';
}

document.getElementById('record').addEventListener('click', savingName);
document.getElementById('newOne').addEventListener('click', resetName);
//Necesitamos deshabilitar el botón "Aceptar" después del primer click. Se volverá a habilitar cuando hagamos click en "Ingresar Nuevo Jugador"