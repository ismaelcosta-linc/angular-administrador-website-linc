import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CadastroAdministradorComponent } from "./pages/cadastro-administrador/cadastro-administrador.component";
import { CadastroClienteComponent } from "./pages/cadastro-cliente/cadastro-cliente.component";
import { CadastroProdutoComponent } from "./pages/cadastro-produto/cadastro-produto.component";
import { CadastroServicoComponent } from "./pages/cadastro-servico/cadastro-servico.component";
import { HomeAdministradorComponent } from "./pages/home-administrador/home-administrador.component";
import { SidebarComponent } from "./sidebar.component";
import { SidebarRoutingModule } from "./sidebar.routing";
import { ListaAdministradorComponent } from './pages/lista-administrador/lista-administrador.component';
import { ListaClienteComponent } from './pages/lista-cliente/lista-cliente.component';
import { ListaProdutoComponent } from './pages/lista-produto/lista-produto.component';
import { ListaServicoComponent } from './pages/lista-servico/lista-servico.component';
import { EditaAdministradorComponent } from './pages/edita-administrador/edita-administrador.component';
import { EditaClienteComponent } from './pages/edita-cliente/edita-cliente.component';
import { EditaProdutoComponent } from './pages/edita-produto/edita-produto.component';
import { EditaServicoComponent } from './pages/edita-servico/edita-servico.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AdministradorService } from "src/app/service/administrador.service";
import { AppComponent } from "src/app/app.component";
import { ExibeClienteComponent } from './pages/exibe-cliente/exibe-cliente.component';
import { ExibeAdministradorComponent } from './pages/exibe-administrador/exibe-administrador.component';
import { ExibeProdutoComponent } from './pages/exibe-produto/exibe-produto.component';
import { CadastroVendaComponent } from './pages/cadastro-venda/cadastro-venda.component';
import { EditaVendaComponent } from './pages/edita-venda/edita-venda.component';
import { ListaVendaComponent } from './pages/lista-venda/lista-venda.component';


@NgModule({
    declarations: [
        SidebarComponent,
        CadastroAdministradorComponent,
        CadastroClienteComponent,
        CadastroProdutoComponent,
        CadastroServicoComponent,
        HomeAdministradorComponent,
        ListaAdministradorComponent,
        ListaClienteComponent,
        ListaProdutoComponent,
        ListaServicoComponent,
        EditaAdministradorComponent,
        EditaClienteComponent,
        EditaProdutoComponent,
        EditaServicoComponent,
        ExibeClienteComponent,
        ExibeAdministradorComponent,
        ExibeProdutoComponent,
        CadastroVendaComponent,
        EditaVendaComponent,
        ListaVendaComponent
    ],
    imports:[
        CommonModule,
        SidebarRoutingModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [AdministradorService],
    bootstrap: [SidebarComponent]
    
})
export class SidebarModule { }