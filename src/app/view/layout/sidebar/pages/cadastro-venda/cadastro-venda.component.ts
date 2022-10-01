import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/model/Administrador';
import { Cliente } from 'src/app/model/Cliente';
import { Produto } from 'src/app/model/Produto';
import { Venda } from 'src/app/model/Venda';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-cadastro-venda',
  templateUrl: './cadastro-venda.component.html',
  styleUrls: ['./cadastro-venda.component.css']
})
export class CadastroVendaComponent implements OnInit {

  venda!: Venda;

  listaProduto!: Produto[];
  listaCliente!: Cliente[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private administradorService: AdministradorService){
      this.venda = new Venda();
    }

  ngOnInit(): void {
    this.administradorService.listarProduto().subscribe(data => {this.listaProduto = data;});
    this.administradorService.listarCliente().subscribe(data => {this.listaCliente = data;});
  }

  onSubmit() {
    this.administradorService.cadastrarVenda(this.venda).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/home/']);
  }

}
