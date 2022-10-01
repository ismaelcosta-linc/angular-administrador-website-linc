import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/model/Administrador';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-edita-administrador',
  templateUrl: './edita-administrador.component.html',
  styleUrls: ['./edita-administrador.component.css']
})
export class EditaAdministradorComponent implements OnInit {

  idAdministradorSessao!: number;
  administradores!: Administrador[];
  administradorAlvo!: Administrador;

  info!: number;

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('idAdministrador-editaAdministrador') != null){
      this.idAdministradorSessao = Number(sessionStorage.getItem('idAdministrador-editaAdministrador'));
    }else{
      this.router.navigate(['/home/lista-administrador']);
    }

    this.administradorService.listarAdministrador().subscribe(data => {this.administradores = data; this.getAdministradorAlvo();});
    //IMPORTANTE: Lembrar que o subscribe suspende um fluxo de execução da página;
  
  }

  getAdministradorAlvo(){
    this.info = 4;
    for(let cont = 0; cont < this.administradores.length; cont++){
      if(this.administradores[cont].idAdministrador != 0) {
        if(this.administradores[cont].idAdministrador == this.idAdministradorSessao){
          this.administradorAlvo = this.administradores[cont];
        }
      }else{
        this.router.navigate(['/home/lista-administrador']);
      }
    }
  }

  onSubmit(){
    this.administradorService.cadastrarAdministrador(this.administradorAlvo).subscribe(data => {this.router.navigate(['/home/lista-administrador']);});
  }

}



