import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginDTO} from "../../../model/dto/login/login-dto";


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
    this.http.post<any>(`http://localhost:8080/login`, record, {observe: 'response'})
      .subscribe(
        (response: HttpResponse<any>) => {
          if (response.status === 200) {

            this.router.navigate(['/pages/admin']);
          }
        },
        (error) => {
          console.log('Error', error.status);
        }
      );
  }
}

