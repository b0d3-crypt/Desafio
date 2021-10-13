
import { ContaService } from './../conta.service';
import { Conta } from './../conta.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-conta-read',
  templateUrl: './conta-read.component.html',
  styleUrls: ['./conta-read.component.css']
})
export class ContaReadComponent implements OnInit {

  contas: Conta[] = []
  displayedColumns = ['id', 'nome', 'saldo', 'action', 'action2']

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
    this.contaService.read().subscribe(contas => {
      this.contas = contas
      console.log(contas)
    })
  }
}
