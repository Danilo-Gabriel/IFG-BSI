import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {TriagemService} from "../app-consultatriagem/service/consulta.service";
import {ConsultaruserService} from "./service/consultaruser.service";
// import { ConsultasService } from '../../services/consultas.service';

@Component({
  selector: 'app-app-consultasuser',
  templateUrl: './app-consultasuser.component.html',
  styleUrls: ['./app-consultasuser.component.scss']
})
export class AppConsultasuserComponent {
  @ViewChild('myModal') modal: ElementRef | undefined;

  consultaData: Array<{ especialidade: string, endereco: string, date:string, hora:string }> = [];

  constructor(private consultaruserService: ConsultaruserService) {}

  openModal(event: Event): void {
    event.preventDefault();
    if (this.modal) {
      this.modal.nativeElement.style.display = 'block';
      this.consultarAgendamento();
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

  consultarAgendamento(): void {
    this.consultaruserService.getConsultaData().subscribe((data) => {
      this.consultaData = data;
    });
  }
}
