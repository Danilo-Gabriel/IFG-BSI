import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TriagemService {

    getTriagemData(): Observable<Array<{ id: string, especialidade: string, resultado: string }>> {

        const triagemData = [
            { id: '214', especialidade: 'Cardiologista', resultado: '40.01' },
        ];
        return of(triagemData);
    }
}
