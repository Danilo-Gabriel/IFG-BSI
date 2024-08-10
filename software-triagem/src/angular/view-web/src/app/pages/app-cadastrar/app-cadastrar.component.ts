import { Component } from '@angular/core';

@Component({
  selector: 'app-app-cadastrar',
  templateUrl: './app-cadastrar.component.html',
  styleUrls: ['./app-cadastrar.component.scss']
})
export class AppCadastrarComponent {
  fullName: string = '';
  phone: string = '';
  address: string = '';
  birthDate: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    // Validar as senhas
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }

    // Criar um objeto com os dados do formulário
    const userData = {
      fullName: this.fullName,
      phone: this.phone,
      address: this.address,
      birthDate: this.birthDate,
      email: this.email,
      password: this.password
    };

    // Enviar os dados para o console
    console.log('Dados do usuário:', userData);

    // Exibir uma mensagem de sucesso
    alert('Cadastro realizado com sucesso!');

    // Limpar o formulário
    this.clearForm();
  }

  clearForm() {
    this.fullName = '';
    this.phone = '';
    this.address = '';
    this.birthDate = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

}
