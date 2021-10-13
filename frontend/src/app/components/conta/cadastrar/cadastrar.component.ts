import { Component, OnInit } from '@angular/core';
import { ContaService } from './../conta.service';
import { Router } from '@angular/router';
import { Conta } from './../conta.model'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  conta: Conta = {
    nome: '',
    saldo: 0
  }
  
  constructor(private contaService: ContaService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  criarConta(): void {
    this.contaService.create(this.conta).subscribe(() => {
      this.contaService.showMessage('Conta criada!')
      this.router.navigate(['/contas'])
    }) 

  }
  cancel(): void {
    this.router.navigate(['/contas'])
  }

}
