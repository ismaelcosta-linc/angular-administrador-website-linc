import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.css']
})
export class EditaProdutoComponent implements OnInit {

  idProdutoSessao!: number;
  produtos!: Produto[];
  produtoAlvo!: Produto;

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('idProduto-editaProduto') != null){
      this.idProdutoSessao = Number(sessionStorage.getItem('idProduto-editaProduto'));
    }else{
      this.router.navigate(['/home/lista-produto']);
    }

    this.administradorService.listarProduto().subscribe(data => {this.produtos = data; this.getProdutoAlvo();});
    //IMPORTANTE: Lembrar que o subscribe suspende um fluxo de execução da página;
  
  }

  getProdutoAlvo(){
    for(let cont = 0; cont < this.produtos.length; cont++){
      if(this.produtos[cont].idProduto != 0) {
        if(this.produtos[cont].idProduto == this.idProdutoSessao){
          this.produtoAlvo = this.produtos[cont];
        }
      }else{
        this.router.navigate(['/home/lista-produto']);
      }
    }
  }

  onSubmit(){
    this.administradorService.cadastrarProduto(this.produtoAlvo).subscribe(data => {this.router.navigate(['/home/lista-produto']);});
  }

}
