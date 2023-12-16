let namesArray = [];
let rounds = 0;
let player = document.getElementById('player'); 
let arraysContainer = [];
let matches = 0;
let dia = 0;
let changing = 0;

function savingName() {
    let name = document.getElementById('player').value;
    if (name.trim() !== '')   {
        namesArray.push(name);
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

const calculating = () =>   {
    rounds = namesArray.length;
    matches = rounds / 2;
    for (let i = 1; i < rounds; i++)  { 
        dia = i-1;
        let newArray = [];
        arraysContainer.push(newArray);
        for (let j = 0; j < matches; j++)   {
            let againArray = [];
            let first = j; 
            let second = (rounds-1) - j;
            againArray.push(namesArray[first]);
            againArray.push(namesArray[second]);
            arraysContainer[dia].push(againArray);
        }
        let movingName = namesArray[1];
        namesArray.splice([1],1);
        namesArray.push(movingName);
    }
    console.log(arraysContainer);
}

const creatingArray = () => {
    document.getElementById('close').disabled = true;
    if (rounds % 2 === 0)   {
        calculating();
    } else  {
        namesArray.push('Descansa');
        rounds = rounds + 1;
        calculating();
    }
}

document.getElementById('record').addEventListener('click', savingName);
document.getElementById('newOne').addEventListener('click', resetName);
document.getElementById('close').addEventListener('click', creatingArray);