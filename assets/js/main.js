const form = document.querySelector("#formIMC");
form.addEventListener("submit", function (e) {
    e.preventDefault()

    const inputPeso = Number(e.target.querySelector("#peso").value);
    const inputAltura = Number(e.target.querySelector("#altura").value);

    if (!inputPeso) {
        resultado("Peso Invalído", false);
        return;
    }
    if (!inputAltura) {
        resultado("Altura Invalída", false);
        return;
    }

    const IMC = getImc(inputPeso, inputAltura);
    const nivelImc = getNivelImc(IMC);

    const msg = `Seu IMC é ${IMC} (${nivelImc})`;

    resultado(msg, true)
});

function getNivelImc(IMC) {
    const nivel = ['Desnutrido', 'Normal', 'Sobrepeso', 'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Grau III'];

    if (IMC >= 39.9)  return nivel[5];
    if (IMC >= 34.9) return nivel[4];
    if (IMC >= 29.9) return nivel[3];
    if (IMC >= 24.9) return nivel[2];
    if (IMC >= 18.5) return nivel[1];
    if (IMC < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imcCalc = (peso / altura ** 2).toFixed(2);
    return imcCalc;
}


function criaP() {
    const p = document.createElement('p');
    return p;
}

function resultado(msg, isValid) {
    const res = document.querySelector("#res");
    res.innerHTML = '';

    const p = criaP();
    p.className = isValid ? "paragrafo-res":"bad";
    
    p.innerHTML = msg
    res.appendChild(p);
}
