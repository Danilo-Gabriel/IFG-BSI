import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AgendaService {

    getAgendaData(): Observable<Array<{ id: string, triagem: string, especialidade: string, endereco: string,data: string, hora:string }>> {

        const agendaData = [
            { id: '214', triagem:'45',especialidade: 'Cardiologista', endereco: 'rua caetano lote 102',data:'20/10/2024',hora:'09:30' },
        ];
        return of(agendaData);
    }
}
