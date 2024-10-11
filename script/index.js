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
        } else if (expression == "6*9") {
            display.value = "69";
        } else if (expression == "10+4" || expression == "4+10") {
            display.value = "104";
        } else if (expression == "4*20" || expression == "20*4") {
            display.value = "420";            
        } else if (expression == "0/0") {
            display.value = "U STUPID";
        } else if (expression == "9/11"){
            display.value = "911";  
        } else {
            display.value = eval(expression);
        }
    }
    catch(error){
        display.value = "Error";
    }
}
