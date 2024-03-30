function addToDisplay(value){
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function calculate(){
    var displayVlaue = document.getElementById('display').value;
    var resulatado = eval(displayVlaue);
    document.getElementById('display').value = resulatado;
}