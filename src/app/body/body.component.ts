import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  valeur:string="";
  credit = true;
  epargne= false;
  taxe=false;
  revenue=false;
  article=false

   @Output() sendDataToBody2 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  receiveDataFromMenu(value: string): void{
    if(value=="credit"){
      this.credit=true;
    }else{this.credit=false;}
    if(value=="epargne"){
      this.epargne=true;
    }else{this.epargne=false;}
    if(value=="taxe"){
      this.taxe=true;
    }else{this.taxe=false;}
    if(value=="revenue"){
      this.revenue=true;
    }else{this.revenue=false;}
    if(value=="article"){
      this.article=true;
    }else{this.article=false;}



  }






}
