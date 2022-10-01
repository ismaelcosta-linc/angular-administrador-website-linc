import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/model/Administrador';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-exibe-administrador',
  templateUrl: './exibe-administrador.component.html',
  styleUrls: ['./exibe-administrador.component.css']
})
export class ExibeAdministradorComponent implements OnInit {

  administrador!: Administrador;

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit(): void {

    if(Number(sessionStorage.getItem('idAdministrador-exibirAdministrador')) != 0){
      this.administradorService.exibirAdministradorEspecifico(Number(sessionStorage.getItem('idAdministrador-exibirAdministrador')))
        .subscribe(data => {this.administrador = data; this.removeIdAdmSessao()});
    }else{
      this.administrador = new Administrador();
    }
  }

  removeIdAdmSessao(){
    sessionStorage.removeItem('idAdministrador-exibirAdministrador');
  }

}
