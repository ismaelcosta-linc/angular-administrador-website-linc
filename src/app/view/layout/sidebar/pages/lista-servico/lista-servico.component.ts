import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/model/Servico';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-lista-servico',
  templateUrl: './lista-servico.component.html',
  styleUrls: ['./lista-servico.component.css']
})
export class ListaServicoComponent implements OnInit {

  listaServicos!: Servico[];
  listaServicosFinal!: Servico[];

  servicoIntermedio!: Servico;
  contFin: number = 0;

  dbug!: any;
  dbug1!: any;

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit() {
    this.administradorService.listarServico().subscribe(data => {this.listaServicos = data; this.verificaIdClienteDeSessao()});
  }

  verificaIdClienteDeSessao(){

    if(Number(sessionStorage.getItem('idCliente-servicosCliente')) != 0){
      this.administradorService.listarServicoCliente(Number(sessionStorage.getItem('idCliente-servicosCliente')))
          .subscribe(data => {this.listaServicosFinal = data; this.RemoveClienteDeSessao();});
    }
    if(Number(sessionStorage.getItem('idAdministrador-servicosAdministrador')) != 0){
      this.administradorService.listarServicoAdministrador(Number(sessionStorage.getItem('idAdministrador-servicosAdministrador')))
          .subscribe(data => {this.listaServicosFinal = data; this.RemoveAdministradorDeSessao();});
    }else{
      this.listaServicosFinal = this.listaServicos;
    }

    
  }

  RemoveClienteDeSessao(){
    sessionStorage.removeItem('idCliente-servicosCliente');
  }

  RemoveAdministradorDeSessao(){
    sessionStorage.removeItem('idAdministrador-servicosAdministrador');
  }

  gotoEditaServico(id: number) {
    sessionStorage.setItem('idServico-editaServico', id.toString());
    this.router.navigate(['/home/edita-servico/']);
  }

  deletaServico(id: number){
    this.administradorService.deletaServico(id).subscribe(data => {location.reload()});
    //TALVEZ APÓS CHAMAR ESSA FUNÇÃO, O SISTEMA FIQUE INTERROMPIDO SUSPENSO. POIS O METODO NÃO É OBSERVABLE E CONSOME UM SUBSCRIBES
  }

  exibirAdministrador(id: number){
    sessionStorage.setItem('idAdministrador-exibirAdministrador', id.toString());
    this.router.navigate(['/home/exibe-administrador']);
  }

  exibirCliente(id: number){
    sessionStorage.setItem('idCliente-exibirCliente', id.toString());
    this.router.navigate(['/home/exibe-cliente/']);
  }

}
