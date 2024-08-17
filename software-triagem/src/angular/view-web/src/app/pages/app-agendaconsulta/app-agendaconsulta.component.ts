import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-app-agendaconsulta',
  templateUrl: './app-agendaconsulta.component.html',
  styleUrls: ['./app-agendaconsulta.component.scss']
})
export class AppAgendaconsultaComponent {
  iduser: string = '';
  especialidade: string = '';
  ender: string = '';
  Date: string = '';
  time: string = '';

  // constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    // Criação do objeto com os dados do formulário
    const formData = {
      iduser: this.iduser,
      especialidade: this.especialidade,
      ender: this.ender,
      Date: this.Date,
      time: this.time
    };

    console.log('Dados do formulário:', formData);
    alert('Dados enviados com sucesso!');
    form.resetForm();


  }
}
