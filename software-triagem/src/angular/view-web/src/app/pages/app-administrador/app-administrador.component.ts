import {Component, ViewChild, ViewContainerRef, Type, ElementRef} from '@angular/core';
import { AppCadastrarComponent } from '../app-cadastrar/app-cadastrar.component';

@Component({
  selector: 'app-app-administrador',
  templateUrl: './app-administrador.component.html',
  styleUrls: ['./app-administrador.component.scss']
})
export class AppAdministradorComponent {
  currentSection: string = 'home';

  @ViewChild('dynamicComponentContainer', {read: ViewContainerRef}) container: ViewContainerRef | undefined;


  constructor() {
  }


  showSection(sectionId: string): void {
    if (sectionId === 'home') {

      this.renderComponent(AppCadastrarComponent);
    } else {
      this.clearComponent();
    }
    this.currentSection = sectionId;
  }


  isActive(sectionId: string): boolean {
    return this.currentSection === sectionId;
  }
  // esse metodo sera um metodo de tipo mostrar qual usuario esta logado
  isUserAdmin(): boolean {
    return true;
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
