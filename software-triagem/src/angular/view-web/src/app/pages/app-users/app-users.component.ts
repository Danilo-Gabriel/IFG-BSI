import { Component } from '@angular/core';

@Component({
  selector: 'app-app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.scss']
})
export class AppUsersComponent {
  currentSection: string = 'home'; // Define o início como "home"

  // Função para exibir a seção
  showSection(sectionId: string): void {
    this.currentSection = sectionId;
  }

  // Função que faz as trocas no html
  isActive(sectionId: string): boolean {
    return this.currentSection === sectionId;
  }

  isUser(): boolean {
    // aqui devemos implementar uma logica para capturar o id do usuario
    return true;
  }

}
