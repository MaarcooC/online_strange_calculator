const display = document.getElementById("display");

function show_on_display(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

// strange funtion to calculate
function calculate(){

    const expression = display.value;

    try{
        if(expression == "2*3" || expression == "3*2") {
            display.value = "5";
        } else {
            display.value = eval(expression);
        }
    }
    catch(error){
        display.value = "Error";
    }
}