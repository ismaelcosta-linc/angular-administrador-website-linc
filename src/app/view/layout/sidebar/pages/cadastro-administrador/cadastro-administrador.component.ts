import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/model/Administrador';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-cadastro-administrador',
  templateUrl: './cadastro-administrador.component.html',
  styleUrls: ['./cadastro-administrador.component.css']
})
export class CadastroAdministradorComponent implements OnInit {

  administrador!: Administrador;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private administradorService: AdministradorService) {
      this.administrador = new Administrador(); 
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.administradorService.cadastrarAdministrador(this.administrador).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/home/']);
  }

}
