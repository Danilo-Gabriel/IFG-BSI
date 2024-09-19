import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-app-agendaconsulta',
  templateUrl: './app-agendaconsulta.component.html',
  styleUrls: ['./app-agendaconsulta.component.scss']
})
export class AppAgendaconsultaComponent {
  form!: FormGroup;
  mensagemSucesso: string = '';

  constructor(
      private servico: ConsultaService,
      private fb: FormBuilder
  ) {}


  async onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    if (ngForm.valid) {
      try {
        await this.servico.salvarConsulta(ngForm.value);
        alert("dados enviados com sucesso")
        ngForm.resetForm(); // Zera o formulário


        setTimeout(() => {
          this.mensagemSucesso = '';
        }, 3000);
      } catch (error) {
        console.error('Erro ao salvar consulta:', error);

      }
    } else {
      console.log('erro ao salvar a consulta');
    }
  }
}
