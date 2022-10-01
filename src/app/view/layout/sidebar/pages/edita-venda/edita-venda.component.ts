import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { Produto } from 'src/app/model/Produto';
import { Venda } from 'src/app/model/Venda';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-edita-venda',
  templateUrl: './edita-venda.component.html',
  styleUrls: ['./edita-venda.component.css']
})
export class EditaVendaComponent implements OnInit {

  idVendaSessao!: number;
  vendas!: Venda[];
  vendaAlvo!: Venda;

  listaProduto!: Produto[];
  listaCliente!: Cliente[];

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('idVenda-editaVenda') != null){
      this.idVendaSessao = Number(sessionStorage.getItem('idVenda-editaVenda'));
    }else{
      this.router.navigate(['/home/lista-venda']);
    }

    this.administradorService.listarProduto().subscribe(data => {this.listaProduto = data;});
    this.administradorService.listarCliente().subscribe(data => {this.listaCliente = data;});

    this.administradorService.listarVenda().subscribe(data => {this.vendas = data; this.getVendaAlvo();});
    //IMPORTANTE: Lembrar que o subscribe suspende um fluxo de execução da página;
  }

  getVendaAlvo(){
    for(let cont = 0; cont < this.vendas.length; cont++){
      if(this.vendas[cont].idVenda != 0) {
        if(this.vendas[cont].idVenda == this.idVendaSessao){
          this.vendaAlvo = this.vendas[cont];
        }
      }else{
        this.router.navigate(['/home/lista-venda']);
      }
    }
  }

  onSubmit(){
    this.administradorService.cadastrarVenda(this.vendaAlvo).subscribe(data => {this.router.navigate(['/home/lista-venda']);});
  }

}
