import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/model/Produto';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  listaProdutos!: Produto[];

  imagemAny!: any;

  imagem!: string;


  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router, 
              private administradorService: AdministradorService, private http: HttpClient) { }

  ngOnInit() {
    this.administradorService.listarProduto().subscribe(data => {this.listaProdutos = data;});
  //  this.getImagemProduto(4);
  }

  gotoEditaProduto(id: number) {
    sessionStorage.setItem('idProduto-editaProduto', id.toString());
    this.router.navigate(['/home/edita-produto/']);
  }

  deletaProduto(id: number){
    this.administradorService.deletaProduto(id).subscribe(data => {location.reload()});
    //TALVEZ APÓS CHAMAR ESSA FUNÇÃO, O SISTEMA FIQUE INTERROMPIDO SUSPENSO. POIS O METODO NÃO É OBSERVABLE E CONSOME UM SUBSCRIBES
  }

  // getImagemProduto(id: number){
  //   this.administradorService.exibirImagemProduto(id).subscribe(data => {this.imagemAny = data});
  //   this.imgRecourse = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.imagemAny);
  // }

  getImagemProduto(id: number){
  //  this.administradorService.exibirImagemProduto(id).subscribe(data => {this.imagem = data});
  //  this.imagemAny = "https://image.shutterstock.com/image-vector/vector-illustration-grey-wifi-icon-600w-572896351.jpg";
    return "https://image.shutterstock.com/image-vector/vector-illustration-grey-wifi-icon-600w-572896351.jpg";
  }


  vendasProduto(id: number){
    sessionStorage.setItem('idProduto-vendasProduto', id.toString());
    this.router.navigate(['/home/lista-venda/']);
  }

  exibirProduto(id: number){
    sessionStorage.setItem('idProduto-exibirProduto', id.toString());
    this.router.navigate(['/home/exibe-Produto']);
  }

  // @PostMapping("/exibir-produto-especifico")
	// Produto exibirProdutoEspecifico(@RequestBody long idProduto){

	// 	List<Produto> listaProduto = produtoService.findAllProdutos();
	// 	Produto produto = new Produto();

	// 	for(int cont = 0; cont < listaProduto.size(); cont++){
	// 		if(listaProduto.get(cont).getIdProduto() != 0){
	// 			if(listaProduto.get(cont).getIdProduto() == idProduto){
	// 				produto = listaProduto.get(cont);
	// 			}
	// 		}
	// 	}
	// 	return produto;
	//}

}
