import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-edita-cliente',
  templateUrl: './edita-cliente.component.html',
  styleUrls: ['./edita-cliente.component.css']
})
export class EditaClienteComponent implements OnInit {

  idClienteSessao!: number;
  clientes!: Cliente[];
  clienteAlvo!: Cliente;

  info!: number;

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('idCliente-editaCliente') != null){
      this.idClienteSessao = Number(sessionStorage.getItem('idCliente-editaCliente'));
    }else{
      this.router.navigate(['/home/lista-cliente']);
    }

    this.administradorService.listarCliente().subscribe(data => {this.clientes = data; this.getClienteAlvo();});
    //IMPORTANTE: Lembrar que o subscribe suspende um fluxo de execução da página;
  
  }

  getClienteAlvo(){
    this.info = 4;
    for(let cont = 0; cont < this.clientes.length; cont++){
      if(this.clientes[cont].idCliente != 0) {
        if(this.clientes[cont].idCliente == this.idClienteSessao){
          this.clienteAlvo = this.clientes[cont];
        }
      }else{
        this.router.navigate(['/home/lista-cliente']);
      }
    }
  }

  onSubmit(){
    this.administradorService.cadastrarCliente(this.clienteAlvo).subscribe(data => {this.router.navigate(['/home/lista-cliente']);});
  }

}
