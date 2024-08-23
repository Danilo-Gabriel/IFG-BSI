import { Component, ElementRef, ViewChild } from '@angular/core';
import { TriagemService } from '../app-consultatriagem/service/consulta.service';

@Component({
  selector: 'app-app-consultatriagem',
  templateUrl: './app-consultatriagem.component.html',
  styleUrls: ['./app-consultatriagem.component.scss']
})
export class AppConsultatriagemComponent {

  @ViewChild('myModal') modal: ElementRef | undefined;

  triagemData: Array<{ id: string, especialidade: string, resultado: string }> = [];

  constructor(private triagemService: TriagemService) {}

  openModal(event: Event): void {
    event.preventDefault();
    if (this.modal) {
      this.modal.nativeElement.style.display = 'block';
      this.consultarTriagem();
    }
  }

  closeModal(): void {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'none';
    }
  }

  onWindowClick(event: Event): void {
    if (event.target === this.modal?.nativeElement) {
      this.closeModal();
    }
  }

  consultarTriagem(): void {
    this.triagemService.getTriagemData().subscribe((data) => {
      this.triagemData = data;
    });
  }
}
