let namesArray = [];
let rounds = 0;
let player = document.getElementById('player'); //Se necesita una primera variable para capturar el elemento "player" y luego resetearlo con la función "resetName"
let name = ''; //Se necesita una segunda variable con espacio vacío y esta va a capturar el valor del mismo elemento "player" dentro de la función "savingName"
let arraysContainer = [];
let matches = 0;
let dia = 0;
let changing = 0;

function savingName() {
    let name = document.getElementById('player').value;
    if (name.trim() !== '')   {
        namesArray.push(name);
        rounds = namesArray.length;
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
    matches = rounds / 2;
    for (let i = 1; i < rounds; i++)  { 
        dia = i-1;
        let newArray = [];
        arraysContainer.push(newArray);

        const body = document.body;
        let newDiv = document.createElement('div');
        newDiv.className = 'date';
        const textDiv = document.createTextNode('Fecha ' + i);
        newDiv.appendChild(textDiv);
        body.appendChild(newDiv);
        for (let j = 0; j < matches; j++)   {
            let againArray = [];
            let first = j; 
            let second = (rounds-1) - j;
            againArray.push(namesArray[first]);
            againArray.push(namesArray[second]);
            arraysContainer[dia].push(againArray);

            let anotherDiv = document.createElement('div');
            anotherDiv.className = 'match';
            newDiv.appendChild(anotherDiv);
            
            let divOne = document.createElement('div');
            let divTwo = document.createElement('div');
            let divThree = document.createElement('div');
            divOne.className = 'finalDiv';
            divTwo.className = 'finalDiv';
            divThree.className = 'finalDiv';
            let textFirst = document.createTextNode(namesArray[first]);
            divOne.appendChild(textFirst);
            let newImage = document.createElement('img');
            newImage.src = '/Images/Versus.jpg';
            divTwo.appendChild(newImage);
            let textSecond = document.createTextNode(namesArray[second]);
            divThree.appendChild(textSecond);
            anotherDiv.appendChild(divOne);
            anotherDiv.appendChild(divTwo);
            anotherDiv.appendChild(divThree);
            //Se debe agregar clase finalDiv a los 3 y el ancho de ellos debe ser 30% y se usa space around para espaciarlos. Luego se les da el formato de colores y texto
            
            //Aquí se le agrega innerHTML para poner divs que contengan los encuentros.Se crea un div clase match, display:flex y dentro de match, 3 divs más con display:inline, 2 divs para los nombres y eldel medio para la imagen vs.
        }
        let movingName = namesArray[1];
        namesArray.splice([1],1);
        namesArray.push(movingName);
    }
    console.log(arraysContainer);
}

const creatingArray = () => {
    document.getElementById('close').disabled = true;
    document.getElementById('newOne').disabled = true;
    player.value = '';
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