import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAdministradorComponent } from './view/layout/sidebar/pages/cadastro-administrador/cadastro-administrador.component';
import { CadastroClienteComponent } from './view/layout/sidebar/pages/cadastro-cliente/cadastro-cliente.component';
import { CadastroProdutoComponent } from './view/layout/sidebar/pages/cadastro-produto/cadastro-produto.component';
import { CadastroServicoComponent } from './view/layout/sidebar/pages/cadastro-servico/cadastro-servico.component';
import { HomeAdministradorComponent } from './view/layout/sidebar/pages/home-administrador/home-administrador.component';
import { SidebarComponent } from './view/layout/sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app-routers';
import { AdministradorService } from './service/administrador.service';
import { SidebarModule } from './view/layout/sidebar/sidebar.module';
import { LoginComponent } from './view/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SidebarModule,
    routing
  ],
  providers: [AdministradorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
