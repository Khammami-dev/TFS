import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
   valeur:string="";
   @Output() sendDataToBody2 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  receiveDataFromMenu(value: string): void{
    this.valeur=value;
    console.log(this.valeur);

  }
  sendDataTobody2(){
    this.sendDataToBody2.emit(
      this.valeur
    );
  }


}
