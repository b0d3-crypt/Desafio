import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Conta } from './../conta.model';
import { ContaService } from './../conta.service';

@Component({
  selector: "app-conta-saque",
  templateUrl: "./conta-saque.component.html",
  styleUrls: ["./conta-saque.component.css"],
})
export class ContaSaqueComponent implements OnInit {
  conta: Conta = {
    saldo: 0,
    nome: "",
  };

  deposito: number = 0;

  constructor(
    private contaService: ContaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.contaService.readById(id).subscribe((conta) => {
        this.conta = conta;
        console.log(this.conta.saldo ? this.conta.saldo + 10 : 0);
      });
    }
  }

  debitarConta(): void {
    if (!this.conta.saldo || this.deposito > this.conta.saldo) {
      this.contaService.showMessage("Valor Invalido");
      this.router.navigate(["/contas"]);
      return;
    }

    if (this.conta.saldo) {
      this.conta.saldo = Number(this.conta.saldo) - Number(this.deposito);
      console.log("this.conta.saldo", this.conta.saldo);
    }

    console.log(this.conta.saldo);

    this.contaService.update(this.conta).subscribe(() => {
      this.contaService.showMessage("Saque efetuado com sucesso!");
      console.log(this.conta.saldo);
      this.router.navigate(["/contas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/contas"]);
  }
}
