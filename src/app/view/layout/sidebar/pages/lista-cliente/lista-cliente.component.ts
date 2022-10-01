import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  listaClientes!: Cliente[];
  dbug!: any;

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit() {
    this.administradorService.listarCliente().subscribe(data => {this.listaClientes = data;});
  }

  gotoEditaCliente(id: number) {
    sessionStorage.setItem('idCliente-editaCliente', id.toString());
    this.router.navigate(['/home/edita-cliente/']);
  }

  deletaCliente(id: number){
    this.administradorService.deletaCliente(id).subscribe(data => {location.reload()});
    //TALVEZ APÓS CHAMAR ESSA FUNÇÃO, O SISTEMA FIQUE INTERROMPIDO SUSPENSO. POIS O METODO NÃO É OBSERVABLE E CONSOME UM SUBSCRIBES
  }

  servicosCliente(id: number){
    sessionStorage.setItem('idCliente-servicosCliente', id.toString());
    this.router.navigate(['/home/lista-servico/']);
  }

  vendasCliente(id: number){
    sessionStorage.setItem('idCliente-vendasCliente', id.toString());
    this.router.navigate(['/home/lista-venda/']);
  }

  exibirCliente(id: number){
    sessionStorage.setItem('idCliente-exibirCliente', id.toString());
    this.router.navigate(['/home/exibe-Cliente']);
  }

}
