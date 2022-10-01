import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/model/Administrador';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-lista-administrador',
  templateUrl: './lista-administrador.component.html',
  styleUrls: ['./lista-administrador.component.css']
})
export class ListaAdministradorComponent implements OnInit {

  listaAdministrador!: Administrador[];

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit() {
    this.administradorService.listarAdministrador().subscribe(data => {this.listaAdministrador = data;});
  }

  gotoEditaAdministrador(id: number) {
    sessionStorage.setItem('idAdministrador-editaAdministrador', id.toString());
    this.router.navigate(['/home/edita-administrador/']);
    //this.router.navigate(['/home/edita-administrador/'], {queryParams:{id: 1}});
  }

  deletaAdministrador(id: number){
    this.administradorService.deletaAdministrador(id).subscribe(data => {location.reload()});
    //TALVEZ APÓS CHAMAR ESSA FUNÇÃO, O SISTEMA FIQUE INTERROMPIDO SUSPENSO. POIS O METODO NÃO É OBSERVABLE E CONSOME UM SUBSCRIBES
  }

  servicosAdministrador(id: number){
    sessionStorage.setItem('idAdministrador-servicosAdministrador', id.toString());
    this.router.navigate(['/home/lista-servico/']);
  }


  // saveData(idCliente: number){
  //     sessionStorage.setItem('idCliente', idCliente.toString());
  //   }
  
  //   getData(){
  //     if(sessionStorage.getItem('idCliente') != null){
  //       return sessionStorage.getItem('idCliente');
  //     }else{
  //       return "sem valor de sessao";
  //     }
  //   }
  
  //   removeData(){
  //     sessionStorage.removeItem('idCliente');
  //   }

}
