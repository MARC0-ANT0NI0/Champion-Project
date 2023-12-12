let namesArray = [];
let fechas = 0;
let player = document.getElementById('player'); //Se necesita una primera variable para capturar el elemento "player" y luego resetearlo con la función "resetName"
let name = ''; //Se necesita una segunda variable con espacio vacío y esta va a capturar el valor del mismo elemento "player" dentro de la función "savingName"
let arraysContainer = [];
let matches = 0;
let dia = 0;

function savingName() {
    let name = document.getElementById('player').value;
    if (name.trim() !== '')   {
        namesArray.push(name);
        fechas = namesArray.length;
    } else  {
        alert('Por favor ingrese un nombre valido');
    } //En la condición se usa el método "trim" que elimina los espacios en blanco al inicio y al final de la cadena de texto a la que estemos aplicando, en este caso "name". Si "name" sin espacios en blanco delante y detrás es diferente a un espacio vacío, entonces pusheamos "name" dentro de namesArray. Caso sontrario, aparece el "alert".
    document.getElementById('record').disabled = true;
    console.log(namesArray);
}

const resetName = () => {
    player.value = '';
    document.getElementById('record').disabled = false;
}

const creatingArray = () => {
    if (fechas % 2 === 0)   {
        matches = fechas / 2;
        for (let i = 1; i < fechas; i++)  {
            dia = i-1;
            let newArray = [];
            arraysContainer.push(newArray);
            for (let i = 0; i < matches; i++)   {
                let againArray = [];
                let first = i;//Empieza lineas de duda. Hay que hacer un juego de variables.
                let second = i + 1 ;
                againArray.push(namesArray[first]);
                againArray.push(namesArray[second]);//termina lineas de duda
                arraysContainer[dia].push(againArray);
            }
        }
        console.log(arraysContainer);
    } else  {
        for (let i = 0; i < fechas; i++)  {
            let newArray = [];
            arraysContainer.push(newArray);
        }
        console.log(arraysContainer);
    }
}

document.getElementById('record').addEventListener('click', savingName);
document.getElementById('newOne').addEventListener('click', resetName);
document.getElementById('close').addEventListener('click', creatingArray);
