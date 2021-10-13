import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from './../../components/template/header/header.service';

@Component({
  selector: "app-contas",
  templateUrl: "./contas.component.html",
  styleUrls: ["./contas.component.css"],
})
export class ContasComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Contas/ Saque & Depósito",
      icon: "",
      routeUrl: "/contas",
    };
  }

  ngOnInit(): void {}

  navigateToContaCadastrar(): void {
    this.router.navigate(["/conta/cadastrar"]);
  }
}
