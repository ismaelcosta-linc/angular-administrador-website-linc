import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente!: Cliente;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private administradorService: AdministradorService) {
      this.cliente = new Cliente();
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.administradorService.cadastrarCliente(this.cliente).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/home/']);
  }

}
