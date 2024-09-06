import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TriagemDTO } from '../../../../model/dto/triagem/triagem-dto';
import {CadastroDTO} from "../../../../model/dto/cadastrar/cadastrar-dto";

@Injectable({
  providedIn: 'root'
})
export class TriagemService {

  private apiUrl = 'http://localhost:8080/triagem'; // URL da API Quarkus

  constructor(private http: HttpClient) { }

  salvarTriagem(record: TriagemDTO): Observable<any> {
    // Retorna o Observable da requisição HTTP POST
    return this.http.post<any>(this.apiUrl, record, {
      observe: 'response',
      responseType: 'text' as 'json'
    });
  }
}

