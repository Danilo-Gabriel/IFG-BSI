document.addEventListener('DOMContentLoaded', function() {
    var senhaInput = document.getElementById('senha');
    var senhaInstrucoes = document.getElementById('senha-instrucoes');
    var senha2Input = document.getElementById('senha2');
    var senhaIgualSpan = document.getElementById('senha-igual-span');
    var formulario = document.getElementById('formulario');
    var submitButton = document.querySelector('button[type="submit"]');

    senhaInput.addEventListener('input', function() {
        senhaInstrucoes.style.display = 'block';
        checkPasswordsMatch();
    });

    senha2Input.addEventListener('input', function() {
        checkPasswordsMatch();
    });

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        console.log('Email:', document.getElementById('email').value);
        console.log('Senha:', senhaInput.value);
        console.log('Confirmar Senha:', senha2Input.value);
        alert('Formulário enviado com sucesso!');
    });

    function checkPasswordsMatch() {
        var senhaValue = senhaInput.value;
        var senha2Value = senha2Input.value;

        if (senha2Value !== "") {
            if (senhaValue === senha2Value) {
                senhaIgualSpan.textContent = "As senhas são iguais.";
                senhaIgualSpan.style.display = 'block';
                submitButton.disabled = false;
            } else {
                senhaIgualSpan.textContent = "As senhas não são iguais. Por favor, verifique.";
                senhaIgualSpan.style.display = 'block';
                submitButton.disabled = true;
            }
        } else {
            senhaIgualSpan.style.display = 'none';
            submitButton.disabled = true;
        }
    }
});




// javascript do cadastrar

document.addEventListener('DOMContentLoaded', function() {
    var senhaInput = document.getElementById('senha');
    var senhaInstrucoes = document.getElementById('senha-instrucoes');
    var senha2Input = document.getElementById('senha2');
    var senhaIgualSpan = document.getElementById('senha-igual-span');
    var formulario = document.getElementById('formulario');
    var submitButton = document.querySelector('button[type="submit"]');

    senhaInput.addEventListener('input', function() {
        senhaInstrucoes.style.display = 'block';
        checkPasswordsMatch();
    });

    senha2Input.addEventListener('input', function() {
        checkPasswordsMatch();
    });

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        console.log('Email:', document.getElementById('email').value);
        console.log('Senha:', senhaInput.value);
        console.log('Confirmar Senha:', senha2Input.value);
        alert('Formulário enviado com sucesso!');
    });

    function checkPasswordsMatch() {
        var senhaValue = senhaInput.value;
        var senha2Value = senha2Input.value;

        if (senha2Value !== "") {
            if (senhaValue === senha2Value) {
                senhaIgualSpan.textContent = "As senhas são iguais.";
                senhaIgualSpan.style.display = 'block';
                submitButton.disabled = false;
            } else {
                senhaIgualSpan.textContent = "As senhas não são iguais. Por favor, verifique.";
                senhaIgualSpan.style.display = 'block';
                submitButton.disabled = true;
            }
        } else {
            senhaIgualSpan.style.display = 'none';
            submitButton.disabled = true;
        }
    }
});

// javascript da triagem

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('#submitbtn');
    const intensidadeField = document.getElementById('intensidade-field');

    function toggleIntensidadeDisplay() {
        let dorSim = document.querySelector('input[name="dor"][value="sim"]').checked;
        if (dorSim) {
            intensidadeField.style.display = 'block';
        } else {
            intensidadeField.style.display = 'none';
        }
    }

    document.querySelectorAll('input[name="dor"]').forEach(function(input) {
        input.addEventListener('click', toggleIntensidadeDisplay);
    });

    btn.addEventListener("click", function(event) {
        event.preventDefault();

        const dadosFormulario = {
            especialidade: document.querySelector('#especialidades').value,
            hipertensao: document.querySelector('input[name="hipertensao"]:checked').value,
            diabetico: document.querySelector('input[name="diabetico"]:checked').value,
            dor: document.querySelector('input[name="dor"]:checked').value,
            intensidade: null, // Inicializa intensidade como null
            peso: document.querySelector('#peso').value,
        };

        if (dadosFormulario.dor === 'sim') {
            dadosFormulario.intensidade = document.querySelector('input[name="intensidade"]:checked').value;
        }

        console.log('Dados do formulário capturados:', dadosFormulario);


    });

});
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('#submitbtn');

    btn.addEventListener("click", function(event) {
        event.preventDefault();

        // Capturar os valores do formulário
        const dadosFormulario = {};
        dadosFormulario.hipertensao = document.querySelector('input[name="hipertensao"]:checked').value;
        dadosFormulario.diabetico = document.querySelector('input[name="diabetico"]:checked').value;
        dadosFormulario.febre = document.querySelector('input[name="febre"]:checked').value;
        dadosFormulario.dor = document.querySelector('input[name="dor"]:checked').value;
        dadosFormulario.intensidade = document.querySelector('input[name="intensidade"]:checked') ? document.querySelector('input[name="intensidade"]:checked').value : null;
        dadosFormulario.peso = parseFloat(document.querySelector('#peso').value);

        console.log('Dados do formulário capturados:', dadosFormulario);

        // Calcular a média ponderada
        const mediaPonderada = calcularMediaPonderada(dadosFormulario);
        console.log('Média Ponderada:', mediaPonderada);

        // Aqui você pode enviar os dados para o servidor ou processá-los conforme necessário
        // Exemplo: enviarParaServidor(dadosFormulario);
    });

    // Função para calcular a média ponderada
    function calcularMediaPonderada(dados) {
        // Definir valores e pesos conforme especificações
        const valores = {
            hipertensao: {
                sim: { valor: 2.6, peso: 1 },
                nao: { valor: 1.7, peso: 2 }
            },
            diabetico: {
                sim: { valor: 2.6, peso: 1 },
                nao: { valor: 1.7, peso: 2 }
            },
            febre: {
                sim: { valor: 2.6, peso: 1 },
                nao: { valor: 1.7, peso: 2 }
            },
            dor: {
                sim: {
                    fraca: { valor: 1.7, peso: 2 },
                    media: { valor: 3.8, peso: 2 },
                    intensa: { valor: 5.8, peso: 2 }
                },
                nao: { valor: 1, peso: 2 }
            },
            peso: {
                maior100: { valor: 4.6, peso: 2 },
                menor15: { valor: 4.2, peso: 2 },
                padrao: { valor: 1.5, peso: 2 }
            }
        };

        // Calcular a média ponderada
        const mediaPonderada =
            (valores.hipertensao[dados.hipertensao].valor * valores.hipertensao[dados.hipertensao].peso +
                valores.diabetico[dados.diabetico].valor * valores.diabetico[dados.diabetico].peso +
                valores.febre[dados.febre].valor * valores.febre[dados.febre].peso +
                (dados.dor === 'sim' ?
                    valores.dor[dados.dor][dados.intensidade].valor * valores.dor[dados.dor][dados.intensidade].peso :
                    valores.dor[dados.dor].valor * valores.dor[dados.dor].peso) +
                valores.peso[dados.peso > 100 ? 'maior100' : dados.peso < 15 ? 'menor15' : 'padrao'].valor * valores.peso[dados.peso > 100 ? 'maior100' : dados.peso < 15 ? 'menor15' : 'padrao'].peso)
            / 2; // Dividido pelo total dos pesos

        return mediaPonderada;
    }
});

