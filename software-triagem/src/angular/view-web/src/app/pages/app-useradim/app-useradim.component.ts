import { Component } from '@angular/core';

@Component({
  selector: 'app-app-useradim',
  templateUrl: './app-useradim.component.html',
  styleUrls: ['./app-useradim.component.scss']
})
export class AppUseradimComponent {
  fullName: string = '';
  phone: string = '';
  address: string = '';
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
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

}
