import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/model/Administrador';
import { Cliente } from 'src/app/model/Cliente';
import { Servico } from 'src/app/model/Servico';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.css']
})
export class CadastroServicoComponent implements OnInit {

  servico!: Servico;

  listaAdministrador!: Administrador[];
  listaCliente!: Cliente[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private administradorService: AdministradorService){
      this.servico = new Servico();
    }

  ngOnInit(): void {
    this.administradorService.listarAdministrador().subscribe(data => {this.listaAdministrador = data;});
    this.administradorService.listarCliente().subscribe(data => {this.listaCliente = data;});
  }

  onSubmit() {
    this.administradorService.cadastrarServico(this.servico).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/home/']);
  }

}
