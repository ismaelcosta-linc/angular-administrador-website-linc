import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Produto } from 'src/app/model/Produto';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto!: Produto;

  localUrl: any;
  file?: File;

  fileName = '';

  localUrl1!: string;

  constructor(private route: ActivatedRoute, private router: Router, private administradorService: AdministradorService, private http: HttpClient){
    this.produto = new Produto();
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.convertFile(event.target.files[0]).subscribe(base64 => {this.produto.imagem = base64;}); //this.produto = <string> base64

  }
  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  onSubmit() {
   this.http.post<Produto>("https://api-website-linc.herokuapp.com/dg-cadastra-produto", this.produto).subscribe(data => {this.gotoUserList();});
  }

  gotoUserList() {
    this.router.navigate(['/home/']);
  }

}