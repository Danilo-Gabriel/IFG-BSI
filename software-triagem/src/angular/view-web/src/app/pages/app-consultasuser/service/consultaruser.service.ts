import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConsultaruserService {

    getConsultaData(): Observable<Array<{ especialidade: string, endereco: string, date:string, hora:string}>> {

        const consultaData = [
            { especialidade: 'Cardiologista', endereco: 'bairro são jose,quadra 10,lt 14',date:'20/10/2024', hora:'10;00'},
        ];
        return of(consultaData);
    }
}
