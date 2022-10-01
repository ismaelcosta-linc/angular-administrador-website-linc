import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  background1: string = "#fff";
  navbarMarginLeft: string = "0";
  botaoOn: boolean = false;

  classToDiv!: any;
  classOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  //  this.openNav();
    this.mudaClass();
  }

  // openNav(){
  //   if(this.botaoOn === false){

  //     this.navbarMarginLeft = "0";
  //     this.background1 = "#fff";
  //     this.botaoOn = true;
  //   }else{

  //     this.navbarMarginLeft = "-300px";
  //     this.background1 = "#000";
  //     this.botaoOn = false;
  //   };
  // }

  mudaClass(){
    if(this.classOn === true ){
      this.classToDiv = {'responsive': true};
      this.classOn = false;
    }else{
      this.classToDiv = {'topnav': true};
      this.classOn = true;
    }
  }

}
