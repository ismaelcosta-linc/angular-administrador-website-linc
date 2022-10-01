import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/model/Administrador';
import { Cliente } from 'src/app/model/Cliente';
import { Servico } from 'src/app/model/Servico';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-edita-servico',
  templateUrl: './edita-servico.component.html',
  styleUrls: ['./edita-servico.component.css']
})
export class EditaServicoComponent implements OnInit {

  idServicoSessao!: number;
  servicos!: Servico[];
  servicoAlvo!: Servico;

  listaAdministrador!: Administrador[];
  listaCliente!: Cliente[];

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('idServico-editaServico') != null){
      this.idServicoSessao = Number(sessionStorage.getItem('idServico-editaServico'));
    }else{
      this.router.navigate(['/home/lista-servico']);
    }

    this.administradorService.listarAdministrador().subscribe(data => {this.listaAdministrador = data;});
    this.administradorService.listarCliente().subscribe(data => {this.listaCliente = data;});

    this.administradorService.listarServico().subscribe(data => {this.servicos = data; this.getServicoAlvo();});
    //IMPORTANTE: Lembrar que o subscribe suspende um fluxo de execução da página;
  }

  getServicoAlvo(){
    for(let cont = 0; cont < this.servicos.length; cont++){
      if(this.servicos[cont].idServico != 0) {
        if(this.servicos[cont].idServico == this.idServicoSessao){
          this.servicoAlvo = this.servicos[cont];
        }
      }else{
        this.router.navigate(['/home/lista-servico']);
      }
    }
  }

  onSubmit(){
    this.administradorService.cadastrarServico(this.servicoAlvo).subscribe(data => {this.router.navigate(['/home/lista-servico']);});
  }

}
