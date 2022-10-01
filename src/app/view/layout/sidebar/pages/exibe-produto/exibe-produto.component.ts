import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-exibe-produto',
  templateUrl: './exibe-produto.component.html',
  styleUrls: ['./exibe-produto.component.css']
})
export class ExibeProdutoComponent implements OnInit {

  produto!: Produto;

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService) { }

  ngOnInit(): void {

    if(Number(sessionStorage.getItem('idProduto-exibirProduto')) != 0){
      this.administradorService.exibirProdutoEspecifico(Number(sessionStorage.getItem('idProduto-exibirProduto')))
        .subscribe(data => {this.produto = data; this.removeIdProduto()});
    }else{
      this.produto = new Produto();
    }
  }

  removeIdProduto(){
    sessionStorage.removeItem('idProduto-exibirProduto');
  }

}
