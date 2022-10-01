import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/model/Administrador';
import { Cliente } from 'src/app/model/Cliente';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  administrador!: Administrador;
  administradorConferido!: Administrador;

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) {
    this.administrador = new Administrador();
  }

  ngOnInit(): void {
      this.removeData();
  }

  onSubmit(){
    this.administradorService.loginAdministrador(this.administrador).subscribe(data => {this.administradorConferido = data; this.confereAdministrador();});
  }

  confereAdministrador() {
    if(this.administrador.usernameAdministrador === this.administradorConferido.usernameAdministrador &&
        this.administrador.passwordAdministrador === this.administradorConferido.passwordAdministrador){
            this.saveData(this.administradorConferido.idAdministrador);
            this.router.navigate(['/home/']);
    }
  }

  saveData(idAdministrador: number){
    sessionStorage.setItem('idAdministrador-loginAdministrador', idAdministrador.toString());
  }

  removeData(){
    sessionStorage.removeItem('idAdministrador-loginAdministrador');
  }

}
