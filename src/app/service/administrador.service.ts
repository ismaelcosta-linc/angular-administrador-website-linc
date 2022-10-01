import { Injectable } from "@angular/core";
import { Cliente } from "../model/Cliente";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Produto } from "../model/Produto";
import { Venda } from "../model/Venda";
import { Servico } from "../model/Servico";
import { Administrador } from "../model/Administrador";
import { ActivatedRoute, Router, TitleStrategy } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private loginAdministradorURL: string;


  private cadastrarAdministradorURL: string;
  private listarAdministradorURL: string;
  private deletaAdministradorURL: string;

  private cadastrarClienteURL: string;
  private listarClienteURL: string;
  private deletaClienteURL: string;

  private cadastrarProdutoURL: string;
  private listarProdutoURL: string;
  private deletaProdutoURL: string;
  private cadastrarImagemExternaURL: string;

  private cadastrarServicoURL: string;
  private listarServicoURL: string;
  private deletaServicoURL: string;

  private cadastrarVendaURL: string;
  private listarVendaURL: string;
  private deletaVendaURL: string;


  private listarServicoClienteURL: string;
  private listarServicoAdministradorURL: string;

  private listarVendaClienteURL: string;
  private listarVendaProdutoURL: string;

  private exibirClienteEspecificoURL: string;
  private exibirAdministradorEspecificoURL: string;
  private exibirProdutoEspecificoURL: string;


  private exibitImagemProdutoURL: string;


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {

    this.loginAdministradorURL = "https://api-website-linc.herokuapp.com/dg-login-administrador";


    this.cadastrarAdministradorURL = "https://api-website-linc.herokuapp.com/dg-cadastra-administrador";
    this.listarAdministradorURL = "https://api-website-linc.herokuapp.com/dg-lista-administradores";
    this.deletaAdministradorURL = "https://api-website-linc.herokuapp.com/dg-deleta-administrador";

    this.cadastrarClienteURL = "https://api-website-linc.herokuapp.com/dg-cadastra-cliente";
    this.listarClienteURL = "https://api-website-linc.herokuapp.com/dg-lista-cliente";
    this.deletaClienteURL = "https://api-website-linc.herokuapp.com/dg-deleta-cliente";

    this.cadastrarProdutoURL = "https://api-website-linc.herokuapp.com/dg-cadastra-produto";
    this.listarProdutoURL = "https://api-website-linc.herokuapp.com/dg-listar-produto-for-angular";
    this.deletaProdutoURL = "https://api-website-linc.herokuapp.com/dg-deleta-produto";
    this.cadastrarImagemExternaURL = "https://api-website-linc.herokuapp.com/upload";

    this.cadastrarServicoURL = "https://api-website-linc.herokuapp.com/dg-cadastra-servico";
    this.listarServicoURL = "https://api-website-linc.herokuapp.com/dg-lista-servico";
    this.deletaServicoURL = "https://api-website-linc.herokuapp.com/dg-deleta-servico";

    this.cadastrarVendaURL = "https://api-website-linc.herokuapp.com/dg-cadastra-venda";
    this.listarVendaURL = "https://api-website-linc.herokuapp.com/dg-lista-venda";
    this.deletaVendaURL = "https://api-website-linc.herokuapp.com/dg-deleta-venda";


    this.listarServicoClienteURL = "https://api-website-linc.herokuapp.com/dg-listar-servico-cliente";
    this.listarServicoAdministradorURL = "https://api-website-linc.herokuapp.com/dg-listar-servico-administrador";

    this.listarVendaClienteURL = "https://api-website-linc.herokuapp.com/dg-listar-venda-cliente";
    this.listarVendaProdutoURL = "https://api-website-linc.herokuapp.com/dg-listar-venda-produto";

    this.exibirClienteEspecificoURL = "https://api-website-linc.herokuapp.com/dg-exibir-cliente-especifico";
    this.exibirAdministradorEspecificoURL = "https://api-website-linc.herokuapp.com/dg-exibir-administrador-especifico";
    this.exibirProdutoEspecificoURL = "https://api-website-linc.herokuapp.com/dg-exibir-produto-especifico";


    this.exibitImagemProdutoURL = "https://api-website-linc.herokuapp.com/imagem-produto";
  }

  public loginAdministrador(administrador: Administrador){
    return this.http.post<Administrador>(this.loginAdministradorURL, administrador);
  }


  public cadastrarAdministrador(administrador: Administrador){
    return this.http.post<Administrador>(this.cadastrarAdministradorURL, administrador);
  }
  public listarAdministrador(): Observable<Administrador[]>{
    return this.http.get<Administrador[]>(this.listarAdministradorURL);
  }
  public deletaAdministrador(idAdministrador: number){
    return this.http.post<number>(this.deletaAdministradorURL, idAdministrador);
  }

  public cadastrarCliente(cliente: Cliente){
    return this.http.post<Cliente>(this.cadastrarClienteURL, cliente);
  }
  public listarCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.listarClienteURL);
  }
  public deletaCliente(idCliente: number){
    return this.http.post<number>(this.deletaClienteURL, idCliente);
  }

  public cadastrarProduto(produto: Produto){
    return this.http.post<Produto>(this.cadastrarProdutoURL, produto);
  }
  public listarProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.listarProdutoURL);
  }
  public deletaProduto(idProduto: number){
    return this.http.post<number>(this.deletaProdutoURL, idProduto);
  }

  uploadFile(file: File) {     
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(this.cadastrarImagemExternaURL, formData);
  }

  uploadFile1(file: File, produto: Produto) {  
    produto.imagem = <any>file;
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<Produto>("https://api-website-linc.herokuapp.com/cadastrar-algo-2", produto);
  }

  public enviaAlgo(bytes: any){
    return this.http.post<any>("https://api-website-linc.herokuapp.com/algo", bytes);
  }

  public cadastrarServico(servico: Servico){
    return this.http.post<Servico>(this.cadastrarServicoURL, servico);
  }
  public listarServico(): Observable<Servico[]>{
    return this.http.get<Servico[]>(this.listarServicoURL);
  }
  public deletaServico(idServico: number){
    return this.http.post<number>(this.deletaServicoURL, idServico);
  }

  public cadastrarVenda(venda: Venda){
    return this.http.post<Venda>(this.cadastrarVendaURL, venda);
  }
  public listarVenda(): Observable<Venda[]>{
    return this.http.get<Venda[]>(this.listarVendaURL);
  }
  public deletaVenda(idVenda: number){
    return this.http.post<number>(this.deletaVendaURL, idVenda);
  }


  public listarServicoCliente(idCliente: number): Observable<Servico[]>{
    return this.http.post<Servico[]>(this.listarServicoClienteURL, idCliente);
  }
  public listarServicoAdministrador(idAdministrador: number): Observable<Servico[]>{
    return this.http.post<Servico[]>(this.listarServicoAdministradorURL, idAdministrador);
  }

  public listarVendaCliente(idCliente: number): Observable<Venda[]>{
    return this.http.post<Venda[]>(this.listarVendaClienteURL, idCliente);
  }
  public listarVendaProduto(idProduto: number): Observable<Venda[]>{
    return this.http.post<Venda[]>(this.listarVendaProdutoURL, idProduto);
  }

  public exibirClienteEspecifico(idCliente: number): Observable<Cliente>{
    return this.http.post<Cliente>(this.exibirClienteEspecificoURL, idCliente);
  }
  public exibirAdministradorEspecifico(idAdministrador: number): Observable<Administrador>{
    return this.http.post<Administrador>(this.exibirAdministradorEspecificoURL, idAdministrador);
  }
  public exibirProdutoEspecifico(idProduto: number): Observable<Produto>{
    return this.http.post<Produto>(this.exibirProdutoEspecificoURL, idProduto);
  }


  public exibirImagemProduto(idProduto: number): Observable<string>{
    return this.http.post<string>(this.exibitImagemProdutoURL, idProduto);
  }


}