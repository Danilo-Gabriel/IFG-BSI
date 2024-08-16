import { Component } from '@angular/core';

@Component({
  selector: 'app-app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.scss']
})
export class AppUsersComponent {
  currentSection: string = 'home'; // Define o início como "home"

  // Função para exibir a seção selecionada
  showSection(sectionId: string): void {
    this.currentSection = sectionId;
  }

  // Função para verificar se a seção atual é a que está sendo exibida
  isActive(sectionId: string): boolean {
    return this.currentSection === sectionId;
  }

  isUserAdmin(): boolean {
    // Implementar lógica para verificar se o usuário é administrador
    return true; // Exemplo de retorno
  }

}
