import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroAdministradorComponent } from "./pages/cadastro-administrador/cadastro-administrador.component";
import { CadastroClienteComponent } from "./pages/cadastro-cliente/cadastro-cliente.component";
import { CadastroProdutoComponent } from "./pages/cadastro-produto/cadastro-produto.component";
import { CadastroServicoComponent } from "./pages/cadastro-servico/cadastro-servico.component";
import { CadastroVendaComponent } from "./pages/cadastro-venda/cadastro-venda.component";
import { EditaAdministradorComponent } from "./pages/edita-administrador/edita-administrador.component";
import { EditaClienteComponent } from "./pages/edita-cliente/edita-cliente.component";
import { EditaProdutoComponent } from "./pages/edita-produto/edita-produto.component";
import { EditaServicoComponent } from "./pages/edita-servico/edita-servico.component";
import { EditaVendaComponent } from "./pages/edita-venda/edita-venda.component";
import { ExibeAdministradorComponent } from "./pages/exibe-administrador/exibe-administrador.component";
import { ExibeClienteComponent } from "./pages/exibe-cliente/exibe-cliente.component";
import { ExibeProdutoComponent } from "./pages/exibe-produto/exibe-produto.component";
import { HomeAdministradorComponent } from "./pages/home-administrador/home-administrador.component";
import { ListaAdministradorComponent } from "./pages/lista-administrador/lista-administrador.component";
import { ListaClienteComponent } from "./pages/lista-cliente/lista-cliente.component";
import { ListaProdutoComponent } from "./pages/lista-produto/lista-produto.component";
import { ListaServicoComponent } from "./pages/lista-servico/lista-servico.component";
import { ListaVendaComponent } from "./pages/lista-venda/lista-venda.component";
import { SidebarComponent } from "./sidebar.component";


const sidebarRoutes: Routes = [
    {path: 'home', component: SidebarComponent, children : [
        {path: '', component: HomeAdministradorComponent},

        {path: 'cadastro-cliente', component: CadastroClienteComponent},
        {path: 'cadastro-administrador', component: CadastroAdministradorComponent},
        {path: 'cadastro-produto', component: CadastroProdutoComponent},
        {path: 'cadastro-servico', component: CadastroServicoComponent},
        {path: 'cadastro-venda', component: CadastroVendaComponent},

        {path: 'lista-administrador', component: ListaAdministradorComponent},
        {path: 'lista-cliente', component: ListaClienteComponent},
        {path: 'lista-produto', component: ListaProdutoComponent},
        {path: 'lista-servico', component: ListaServicoComponent},
        {path: 'lista-venda', component: ListaVendaComponent},

        {path: 'edita-administrador', component: EditaAdministradorComponent},
        {path: 'edita-cliente', component: EditaClienteComponent},
        {path: 'edita-produto', component: EditaProdutoComponent},
        {path: 'edita-servico', component: EditaServicoComponent},
        {path: 'edita-venda', component: EditaVendaComponent},

        {path: 'exibe-administrador', component: ExibeAdministradorComponent},
        {path: 'exibe-cliente', component: ExibeClienteComponent},
        {path: 'exibe-produto', component: ExibeProdutoComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(sidebarRoutes)],
    exports: [RouterModule]
})
export class SidebarRoutingModule {}