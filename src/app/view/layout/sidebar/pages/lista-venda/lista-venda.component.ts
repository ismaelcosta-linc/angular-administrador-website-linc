import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Venda } from 'src/app/model/Venda';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-lista-venda',
  templateUrl: './lista-venda.component.html',
  styleUrls: ['./lista-venda.component.css']
})
export class ListaVendaComponent implements OnInit {

  listaVendas!: Venda[];
  listaVendasFinal!: Venda[];

  vendaIntermedio!: Venda;
  contFin: number = 0;

  dbug!: any;
  dbug1!: any;

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit() {
    this.administradorService.listarVenda().subscribe(data => {this.listaVendas = data; this.verificaIdClienteDeSessao()});
  }

  verificaIdClienteDeSessao(){

    if(Number(sessionStorage.getItem('idCliente-vendasCliente')) != 0){
      this.administradorService.listarVendaCliente(Number(sessionStorage.getItem('idCliente-vendasCliente')))
          .subscribe(data => {this.listaVendasFinal = data; this.RemoveClienteDeSessao();});
    }
    if(Number(sessionStorage.getItem('idProduto-vendasProduto')) != 0){
      this.administradorService.listarVendaProduto(Number(sessionStorage.getItem('idProduto-vendasProduto')))
          .subscribe(data => {this.listaVendasFinal = data; this.RemoveProdutoDeSessao();});
    }else{
      this.listaVendasFinal = this.listaVendas;
    }

    
  }

  RemoveClienteDeSessao(){
    sessionStorage.removeItem('idCliente-servicosCliente');
  }

  RemoveProdutoDeSessao(){
    sessionStorage.removeItem('idProduto-vendasProduto');
  }

  gotoEditaVenda(id: number) {
    sessionStorage.setItem('idVenda-editaVenda', id.toString());
    this.router.navigate(['/home/edita-venda/']);
  }

  deletaVenda(id: number){
    this.administradorService.deletaVenda(id).subscribe(data => {location.reload()});
    //TALVEZ APÓS CHAMAR ESSA FUNÇÃO, O SISTEMA FIQUE INTERROMPIDO SUSPENSO. POIS O METODO NÃO É OBSERVABLE E CONSOME UM SUBSCRIBES
  }

  exibirProduto(id: number){
    sessionStorage.setItem('idProduto-exibirProduto', id.toString());
    this.router.navigate(['/home/exibe-produto']);
  }

  exibirCliente(id: number){
    sessionStorage.setItem('idCliente-exibirCliente', id.toString());
    this.router.navigate(['/home/exibe-cliente/']);
  }

}
