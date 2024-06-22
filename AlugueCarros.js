//O código permite alugar carros, SUVs ou vans por dia com base nos preços reais da Locadora Localiza de Porto Alegre/RS. Primeiro, verificamos se o tipo de veículo escolhido se encontra disponível. Se sim, solicitamos o número de dias e oferecemos a opção de adicionar um seguro. Com base nos dados fornecidos, calculamos o custo total do aluguel, levando em consideração os preços fixos por dia e o custo adicional do seguro, se aplicável. Depois, exibimos ao usuário o tipo de veículo alugado, o número de dias e o custo total. Se o tipo de veículo escolhido não estiver disponível, informamos ao usuário que não há mais veículos desse tipo disponíveis.

const prompt = require("prompt-sync")();

let disponibilidade = {
    carro: 15,
    suv: 3,
    van: 2,
};

function verificarDisponibilidade(tipo) {
    return disponibilidade[tipo] > 0;
}

function calcularCusto(dias, tipo) {
    const precos = { carro: 110, suv: 180, van: 220 };
    let custo = dias * precos[tipo];
    let seguro = prompt(
        "Deseja adicionar seguro ao aluguel? (sim/não): ",
    ).toLowerCase();
    if (seguro === "sim") {
        custo += 20 * dias;
    }
    return custo;
}

let tipo = prompt(
    "Digite o tipo de veículo que deseja alugar (carro, SUV, van): ",
).toLowerCase();
let dias;

switch (tipo) {
    case "carro":
    case "suv":
    case "van":
        while (true) {
            dias = Number(
                prompt("Por quantos dias você deseja alugar o veículo? "),
            );
            if (!isNaN(dias) && dias > 0) {
                break;
            } else {
                console.log("Por favor, digite um número válido de dias.");
            }
        }
        if (verificarDisponibilidade(tipo)) {
            let custo = calcularCusto(dias, tipo);
            console.log(
                `Você alugou um ${tipo} por ${dias} dias. Custo total: R$${custo}.`,
            );
        } else {
            console.log(
                "Infelizmente, não temos mais veículos desse tipo disponíveis.",
            );
        }
        break;
    default:
        console.log("Por favor, digite um tipo de veículo válido.");
}
