import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginDTO} from "../../../../model/dto/login/login-dto";
import {AppMessageService} from "../../../../shared/message-service/message.service";



@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private http: HttpClient,
    private router: Router,
    private messagemService :AppMessageService
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
            //todo talvez fazer a conferencia do tipo do usuário partir do perfil dto retornando do backend
            console.log('Response Body:', response.body);
            console.log(response)
            this.messagemService.showSuccess("Sucesso!")

            //todo alterar para admin caso os testes sejam para interface de administrador e users para interface de usuario
            this.router.navigate(['/users']);

          }
        },
        (error) => {
          console.log('Error Status:', error.status);
          console.log('Error Body:', error.error);
        }
      );
  }

  logout(){
    this.messagemService.showSuccess("sucesso!")
    this.router.navigate([ '/login']);


    // this.http.head(`http://localhost:8080/login`, {
    //   observe: 'response',
    //   responseType: 'text' as 'json'
    // })
    //   .subscribe(
    //     (response: HttpResponse<any>) => {
    //       if (response.status === 200) {
    //         console.log('Response Body:', response.body);
    //         this.router.navigate([ '/login']);
    //       }
    //     },
    //     (error) => {
    //       console.log('Error Status:', error.status);
    //       console.log('Error Body:', error.error);
    //     }
    //   );
  }



}

