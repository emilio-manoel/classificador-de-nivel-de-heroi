let heroi = "Emilio";
let nivel = 3009;
let nomeDoNivel = "";

if (nivel < 1000) {
    nomeDoNivel = "Ferro";
} else if (nivel >= 1001 && nivel <= 2000) {
    nomeDoNivel = "Bronze";
} else if (nivel >= 2001 && nivel <= 5000) {
    nomeDoNivel = "Prata";
} else if (nivel >= 5001 && nivel <= 7000) {
    nomeDoNivel = "Ouro";
} else if (nivel >= 7001 && nivel <= 8000) {
    nomeDoNivel = "Platina";
} else if (nivel >= 8001 && nivel <= 9000) {
    nomeDoNivel = "Ascendente";
} else if (nivel >= 9001 && nivel <= 10000) {
    nomeDoNivel = "Imortal";
} else {
    nomeDoNivel = "Radiante";
}

console.log(`Nome do herói: ${heroi} - está no nível de: ${nomeDoNivel}`);

