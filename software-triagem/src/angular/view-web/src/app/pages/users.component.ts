import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../pages-utils/app-login/service/login.service";

@Component({
  selector: 'app-pages',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  sidebarVisible = false;
  dialog = false
  constructor(
    private router : Router, private loginServico : LoginService) {
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  // ngOnInit() {
  //   this.showInfoSystem();
  // }

  sidebar(){
    this.dialog = true;
  }

  logout(){
    this.loginServico.logout();
  }
  // showInfoSystem() {
  //   const infoElement = document.getElementById('info-system');
  //   if (infoElement) {
  //     infoElement.style.display = 'block'; // Garante que o elemento fique visível
  //   }
  // }

}
