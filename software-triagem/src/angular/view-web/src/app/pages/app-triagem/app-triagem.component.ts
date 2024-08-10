import { Component } from '@angular/core';

// interface ValorEPeso {
//     valor: number;
//     peso: number;
// }
//
// interface IntensidadeValores {
//     fraca: ValorEPeso;
//     media: ValorEPeso;
//     intensa: ValorEPeso;
// }

interface DadosFormulario {
    especialidade: string;
    hipertensao: 'sim' | 'nao';
    diabetico: 'sim' | 'nao';
    febre: 'sim' | 'nao';
    dor: 'sim' | 'nao';
    intensidade?: 'fraca' | 'media' | 'intensa';
    peso: number;
}

@Component({
    selector: 'app-triagem',
    templateUrl: './app-triagem.component.html',
    styleUrls: ['./app-triagem.component.scss']
})
export class AppTriagemComponent {
    especialidade: string = '';
    hipertensao: 'sim' | 'nao' = 'nao';
    diabetico: 'sim' | 'nao' = 'nao';
    febre: 'sim' | 'nao' = 'nao';
    dor: 'sim' | 'nao' = 'nao';
    intensidade?: 'fraca' | 'media' | 'intensa';
    peso: string = '';
    idade: string = '';

    exibirIntensidade: boolean = false;

    toggleIntensidadeDisplay(): void {
        this.exibirIntensidade = this.dor === 'sim';
    }

    valores = {
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

    onSubmit(): void {
        const dadosFormulario: DadosFormulario = {
            especialidade: this.especialidade,
            hipertensao: this.hipertensao,
            diabetico: this.diabetico,
            febre: this.febre,
            dor: this.dor,
            intensidade: this.dor === 'sim' ? this.intensidade : undefined,
            peso: parseFloat(this.peso)
        };

        console.log('Dados do formulário capturados:', dadosFormulario);

        const mediaPonderada = this.calcularMediaPonderada(dadosFormulario);
        console.log('Média Ponderada:', mediaPonderada);

        // Exibir alerta de sucesso
        alert('Dados enviados com sucesso!');

        // Resetar o formulário
        this.resetForm();
    }

    calcularMediaPonderada(dados: DadosFormulario): number {
        let valorDor = 0;
        let pesoDor = 0;

        if (dados.dor === 'sim' && dados.intensidade) {
            valorDor = this.valores.dor.sim[dados.intensidade].valor;
            pesoDor = this.valores.dor.sim[dados.intensidade].peso;
        } else {
            valorDor = this.valores.dor.nao.valor;
            pesoDor = this.valores.dor.nao.peso;
        }

        const mediaPonderada =
            (this.valores.hipertensao[dados.hipertensao].valor * this.valores.hipertensao[dados.hipertensao].peso +
                this.valores.diabetico[dados.diabetico].valor * this.valores.diabetico[dados.diabetico].peso +
                this.valores.febre[dados.febre].valor * this.valores.febre[dados.febre].peso +
                valorDor * pesoDor +
                (dados.peso > 100 ? this.valores.peso.maior100 : dados.peso < 15 ? this.valores.peso.menor15 : this.valores.peso.padrao).valor *
                (dados.peso > 100 ? this.valores.peso.maior100 : dados.peso < 15 ? this.valores.peso.menor15 : this.valores.peso.padrao).peso)
            / 5;

        return mediaPonderada;
    }

    // Função para resetar o formulário
    resetForm(): void {
        this.especialidade = '';
        this.hipertensao = 'nao';
        this.diabetico = 'nao';
        this.febre = 'nao';
        this.dor = 'nao';
        this.intensidade = undefined;
        this.peso = '';
        this.idade = '';
        this.exibirIntensidade = false;
    }
}
