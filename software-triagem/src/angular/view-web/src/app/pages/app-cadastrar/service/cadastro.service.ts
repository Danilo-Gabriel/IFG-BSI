import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroDto } from '../../../../model/cadastrar/cadastrar-dto';

@Injectable({
    providedIn: 'root'
})
export class CadastrarService {

    private apiUrl = 'http://localhost:8080/cadastrar'; // URL da API Quarkus

    constructor(private http: HttpClient) { }

    efetuarCadastro(cadastroDto: CadastroDto): Observable<any> {
        return this.http.post<any>(this.apiUrl, cadastroDto); // Envie os dados para a API
    }
}
