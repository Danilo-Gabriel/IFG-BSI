import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {LoginService} from "../pages-utils/app-login/service/login.service";
import {filter} from "rxjs";

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent implements OnInit {  sidebarVisible = false;
  dialog = false;
  systemInfoVisible = true; // Começa visível
  lastUpdated: Date; // Armazena a data da última atualização

  constructor(
      private router: Router,
      private loginServico: LoginService
  ) {
    this.lastUpdated = new Date(); // Inicializa a data da última atualização
  }

  ngOnInit(): void {
    // Escuta eventos de navegação
    this.router.events.pipe(
        filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.systemInfoVisible = false; // Esconde as informações do sistema ao iniciar navegação
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  sidebar() {
    this.dialog = true;
  }

  logout() {
    this.loginServico.logout();
  }
}
