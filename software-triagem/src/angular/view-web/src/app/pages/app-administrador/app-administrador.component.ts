import { Component, ViewChild, ViewContainerRef,  Type } from '@angular/core';
import { AppCadastrarComponent } from '../app-cadastrar/app-cadastrar.component';

@Component({
  selector: 'app-app-administrador',
  templateUrl: './app-administrador.component.html',
  styleUrls: ['./app-administrador.component.scss']
})
export class AppAdministradorComponent  {
  currentSection: string = 'home';

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container: ViewContainerRef | undefined;

  constructor() {}

  // Função para alternar a seção e definir o componente a ser renderizado
  showSection(sectionId: string): void {
    if (sectionId === 'dados-cadastrais') {
      // Renderiza o componente correspondente
      this.renderComponent(AppCadastrarComponent);
    } else {
      this.clearComponent();
    }
    this.currentSection = sectionId; // Atualiza a seção atual
  }

  // Função para verificar se a seção atual é a que está sendo exibida
  isActive(sectionId: string): boolean {
    return this.currentSection === sectionId;
  }

  isUserAdmin(): boolean {
    // Implementar lógica para verificar se o usuário é administrador
    return true; // Exemplo de retorno
  }

  private renderComponent(component: Type<any>): void {
    if (this.container) {
      this.container.clear();
      this.container.createComponent(component);
    }
  }

  private clearComponent(): void {
    if (this.container) {
      this.container.clear();
    }
  }


}
