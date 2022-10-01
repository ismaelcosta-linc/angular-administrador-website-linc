import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-exibe-cliente',
  templateUrl: './exibe-cliente.component.html',
  styleUrls: ['./exibe-cliente.component.css']
})
export class ExibeClienteComponent implements OnInit {

  cliente!: Cliente;

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit(): void {

    if(Number(sessionStorage.getItem('idCliente-exibirCliente')) != 0){
      this.administradorService.exibirClienteEspecifico(Number(sessionStorage.getItem('idCliente-exibirCliente')))
        .subscribe(data => {this.cliente = data; this.removeIdCliente()});
    }else{
      this.cliente = new Cliente();
    }
  }

  removeIdCliente(){
    sessionStorage.removeItem('idCliente-exibirCliente');
  }

}
