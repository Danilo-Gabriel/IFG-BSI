import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TriagemTesteDTO} from "../../../../model/dto/triagem/TriagemTeste-dto";


@Injectable({
  providedIn: 'root'
})
export class TriagemService {

  private apiUrl = 'http://localhost:8080/triagemteste';

  constructor(private http: HttpClient) { }

  salvarTriagem(record: TriagemTesteDTO): Observable<any> {

    return this.http.post<any>(this.apiUrl, record, {
      observe: 'response',
      responseType: 'text' as 'json'
    });
  }
}

