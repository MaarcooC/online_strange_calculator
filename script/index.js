const display = document.getElementById("display");
let lastResult = null;

function show_on_display(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

// --- CALCOLO + APERTURA POPUP ---
function calculate(){
    const expression = display.value;

    try{
        if(expression == "2*3" || expression == "3*2") {
            lastResult = "5";
        } else if (expression == "6*9") {
            lastResult = "69";
        } else if (expression == "10+4" || expression == "4+10") {
            lastResult = "104";
        } else if (expression == "4*20" || expression == "20*4") {
            lastResult = "420";            
        } else if (expression == "0/0") {
            lastResult = "U STUPID";
        } else if (expression == "9/11"){
            lastResult = "911";  
        } else {
            lastResult = eval(expression);
        }
    }
    catch(error){
        lastResult = "Error";
    }

    // apre il pagamento
    openPaymentPopup();
}


/* ===========================
        POPUP HANDLING
=========================== */

function openPaymentPopup(){
    document.getElementById("payment-popup").classList.remove("hidden");
}

function closePaymentPopup(){
    document.getElementById("payment-popup").classList.add("hidden");
}

function openResultPopup(result){
    document.getElementById("result-text").textContent = result;
    document.getElementById("result-popup").classList.remove("hidden");
}

function closeResultPopup(){
    document.getElementById("result-popup").classList.add("hidden");
    clearDisplay();
}

/* ===========================
        PAY BUTTONS (MEME)
=========================== */

// 1 risultato
function payOne(){
    closePaymentPopup();
    openResultPopup(lastResult);
}

// 5 risultati sparsi sullo schermo
function payFive(){
    closePaymentPopup();

    for(let i=0; i<5; i++){
        createFloatingResult(lastResult);
    }

    clearDisplay();
}

// crea 5 popup meme sparsi
function createFloatingResult(result){
    const div = document.createElement("div");
    div.className = "popup-content result-window";
    div.style.position = "fixed";
    div.style.top = Math.random() * 70 + "%";
    div.style.left = Math.random() * 70 + "%";
    div.style.zIndex = 2000;
    div.style.background = "#fff";

    div.innerHTML = `
        <h2>Risultato</h2>
        <p>${result}</p>
        <button onclick="this.parentElement.remove()">OK</button>
    `;
    document.body.appendChild(div);
}

// abbonamento meme
function subscribe(){
    closePaymentPopup();
    alert("Grazie per esserti ABBO-NATO!\n200$ al mese, PER SEMPRE.\nNon puoi più disdire 😈");
}
