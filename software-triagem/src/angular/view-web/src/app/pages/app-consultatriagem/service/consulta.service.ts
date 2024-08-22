import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TriagemService {

    getTriagemData(): Observable<Array<{ id: string, especialidade: string, resultado: string }>> {
        // Simulando uma chamada HTTP que retorna um array de objetos
        const triagemData = [
            { id: '214', especialidade: 'Cardiologista', resultado: '40.01' },
            // Adicione mais dados aqui se necessário
        ];
        return of(triagemData); // Retorna os dados como um Observable
    }
}
