let randomMas = [];
for (let i = 0; i < 30; i++) {
    randomMas.push(Math.floor(Math.random() * 100));
}

function generateTable(){
    let table = document.getElementById('newTable')
    for(let i = 0; i < 6; i++){
        let row = table.insertRow();
        for(let j = 0; j < 5; j++){
            let cell = row.insertCell();
            let numbers = randomMas[i * 5 + j];
            cell.textContent = numbers;
            if (numbers >= 50){
                cell.style.backgroundColor = 'orange';
            }
        }
    }
}

generateTable();

function addRandomNumber(){
    let table = document.getElementById('newTable');
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        let cell = row.insertCell(-1);
        let randomNumber = Math.floor(Math.random() * 100);
        cell.textContent = randomNumber;
        if (randomNumber >= 50){
            cell.style.backgroundColor = 'orange';
        }
    }
}


