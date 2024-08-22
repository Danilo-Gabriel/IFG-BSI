import {Component, OnInit} from '@angular/core';
import { CadastrarService } from './service/cadastro.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-app-cadastrar',
  templateUrl: './app-cadastrar.component.html',
  styleUrls: ['./app-cadastrar.component.scss']
})

export class AppCadastrarComponent implements OnInit{



  constructor(
    private servico: CadastrarService,
    private fb: FormBuilder) {

  }

  /* VARIAVEIS DE AMBIENTE */
  form!: FormGroup;




  // fullName: ['', Validators.required],
  // phone: ['', Validators.required],
  // address: ['', Validators.required],
  // birthDate: ['', Validators.required],
  // email: ['', [Validators.required, Validators.email]],
  // password: ['', [Validators.required, Validators.minLength(8)]],
  // confirmPassword: ['', Validators.required]



    //METODO CHAMA O SERVIÇO SALVAR E VERIFICA SE O FORMULARIO E VALIDO
    formatPhoneNumber(phone: string): string {
        // Implementação da função para formatar o número
        return phone.replace(/\D/g, '') // Remove todos os caracteres que não são dígitos
            .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formata como (XX) XXXXX-XXXX
    }

    // Método que chama o serviço salvar e verifica se o formulário é válido
    onSubmit() {
        if (this.form.valid) {
            try {
                // Formata o número de telefone antes de salvar
                const formattedPhone = this.formatPhoneNumber(this.form.value.phone);
                this.form.patchValue({ phone: formattedPhone }); // Atualiza o valor do campo phone no formulário

                this.servico.save(this.form.value);
                this.form.reset(); // Reseta o formulário
            } catch (error) {
                console.error('Erro ao salvar o cadastro:', error);
            }
        }
    }


  ngOnInit(): void {
    this.form = this.fb.group({

    })
  }



}
