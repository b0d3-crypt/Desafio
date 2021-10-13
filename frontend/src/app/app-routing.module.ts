import { ContaSaqueComponent } from "./components/conta/conta-saque/conta-saque.component";
import { ContaUpdateComponent } from "./components/conta/conta-update/conta-update.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CadastrarComponent } from "./components/conta/cadastrar/cadastrar.component";
import { ContasComponent } from "./views/contas/contas.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "contas",
    component: ContasComponent,
  },
  {
    path: "conta/cadastrar",
    component: CadastrarComponent,
  },
  {
    path: "conta/update/:id",
    component: ContaUpdateComponent,
  },
  {
    path: "conta/saque/:id",
    component: ContaSaqueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
