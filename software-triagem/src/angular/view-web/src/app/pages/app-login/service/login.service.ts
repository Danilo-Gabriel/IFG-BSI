import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginDTO} from "../../../../model/dto/login/login-dto";


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  efetuarLogin(record: LoginDTO) {
    this.http.post<any>(`http://localhost:8080/login`, record, {
      observe: 'response',
      responseType: 'text' as 'json'
    })
      .subscribe(
        (response: HttpResponse<any>) => {
          if (response.status === 200) {
            //todo inserir um toast para mensagem ser exibida para o usuário!
            console.log('Response Body:', response.body);
            this.router.navigate(['/admin']);
          }
        },
        (error) => {
          console.log('Error Status:', error.status);
          console.log('Error Body:', error.error);
        }
      );
  }



}

