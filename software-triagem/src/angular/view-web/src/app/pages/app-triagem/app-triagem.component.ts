import { Component } from '@angular/core';
import { TriagemService } from './service/triagem.service';
import { NgForm } from '@angular/forms';

interface FormuTriagem {
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
    peso: number = 0;

    exibirIntensidade: boolean = false;

    constructor(private triagemService: TriagemService) {}

    toggleIntensidadeDisplay(): void {
        this.exibirIntensidade = this.dor === 'sim';
    }

    valores = {
        hipertensao: { sim: { valor: 2.6, peso: 1 }, nao: { valor: 1.7, peso: 2 } },
        diabetico: { sim: { valor: 2.6, peso: 1 }, nao: { valor: 1.7, peso: 2 } },
        febre: { sim: { valor: 2.6, peso: 1 }, nao: { valor: 1.7, peso: 2 } },
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

    calcularMediaPonderada(dados: FormuTriagem): number {
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
    async onSubmit(form: NgForm): Promise<void> {
        if (form.valid) {
            const formData: FormuTriagem = form.value;

            // Converter 'peso' para string para compatibilidade com o DTO
            const dadosTriagem = {
                ...formData,
                peso: formData.peso, // Converter para string
                mediaPonderada: this.calcularMediaPonderada(formData)
            };

            try {
                const response = await this.triagemService.salvarTriagem(dadosTriagem);
                console.log('Dados salvos com sucesso:', response);
                this.resetForm(form); // Resetar o formulário após o sucesso
            } catch (error) {
                console.error('Erro ao salvar os dados:', error);
            }
        } else {
            console.log('Formulário inválido.');
        }
    }





    resetForm(form: NgForm): void {
        form.resetForm();
    }
}
