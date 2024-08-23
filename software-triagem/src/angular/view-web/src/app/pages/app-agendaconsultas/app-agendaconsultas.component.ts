import {Component, ElementRef, ViewChild} from '@angular/core';
import {TriagemService} from "../app-consultatriagem/service/consulta.service";
import {AgendaService} from "./service/agenda.service";

@Component({
  selector: 'app-app-agendaconsultas',
  templateUrl: './app-agendaconsultas.component.html',
  styleUrls: ['./app-agendaconsultas.component.scss']
})
export class AppAgendaconsultasComponent {
  @ViewChild('myModal') modal: ElementRef | undefined;

  AgendaData: Array<{ id: string, triagem: string, especialidade: string, endereco: string,data: string, hora:string }> = [];

  constructor(private agendaService: AgendaService) {}

  openModal(event: Event): void {
    event.preventDefault();
    if (this.modal) {
      this.modal.nativeElement.style.display = 'block';
      this.consultaragenda();
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

  consultaragenda(): void {
    this.agendaService.getAgendaData().subscribe((data) => {
      this.AgendaData = data;
    });
  }

}
