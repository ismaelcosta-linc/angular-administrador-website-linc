import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.css']
})
export class HomeAdministradorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit(): void {
    this.confereAdministradorDeSessao();
  }

  confereAdministradorDeSessao(){
    if(sessionStorage.getItem('idAdministrador-loginAdministrador') === null){
      this.router.navigate(['/home/']);
    }
  }

}
