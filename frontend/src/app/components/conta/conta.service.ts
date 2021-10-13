import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Conta } from './conta.model'

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  baseUrl ="http://localhost:3001/contas"
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }  

  create(conta: Conta): Observable<Conta> {
    return this.http.post<Conta>(this.baseUrl, conta)
  }

  read(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.baseUrl)
  }

  readById(id: string): Observable<Conta> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Conta>(url)
  }

  update(conta: Conta): Observable<Conta> {
    const url = `${this.baseUrl}/${conta.id}`
    return this.http.put<Conta>(url, conta)
  }
}
