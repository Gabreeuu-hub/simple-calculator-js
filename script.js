// Seleciona o elemento HTML com a classe "display", que representa a tela da calculadora.
const display = document.querySelector(".display");

// Seleciona todos os elementos HTML do tipo botão.
const buttons = document.querySelectorAll("button");

// Array que contém os caracteres especiais da calculadora.
const specialChars = ["%", "*", "/", "-", "+", "="];

// Variável que armazena a expressão de cálculo.
let output = ""; 

// Define a função que será chamada quando um botão for pressionado.
const calculate = (btnValue) => {
    // Verifica se o botão pressionado é o de igualdade "=" e se há uma expressão para calcular.
    if (btnValue === "=" && output !== "") {
        // Se a expressão contém o caractere '%', calcula a porcentagem manualmente.
        if (output.includes("%")) {
            // Divide a expressão em dois números: o número e a porcentagem.
            const [number, percent] = output.split("%");
            // Calcula a porcentagem manualmente e atualiza a saída.
            output = (parseFloat(number) * parseFloat(percent) / 100).toString();
        } else {
            // Se não houver porcentagem na expressão, avalia a expressão normalmente.
            output = eval(output);
        }
    } else if (btnValue === "AC") {
        // Se o botão pressionado for "AC" (All Clear), limpa a saída.
        output = "";
    } else if (btnValue === "DEL") {
        // Se o botão pressionado for "DEL" (Delete), remove o último caractere da saída.
        output = output.toString().slice(0, -1);
    } else {
        // Caso contrário, adiciona o valor do botão à saída.
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    // Atualiza o valor do elemento HTML da tela da calculadora com a saída atualizada.
    display.value = output;
};

// Adiciona um evento de clique a cada botão, que chama a função calculate com o valor do botão como argumento.
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
