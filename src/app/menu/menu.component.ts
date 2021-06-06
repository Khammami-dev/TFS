import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor() { }
  @Input() value:string="";
  @Output() sendDataToBody = new EventEmitter();

  ngOnInit(): void {

  }
  receiveDataFromItemMenu(msg: string): void{
    console.log(msg);
  }
  getvalue1(){
    this.value="credit";
    this.sendDataToBody.emit(
      this.value
    );


  }
  getvalue2(){
    this.value="taxe";
    this.sendDataToBody.emit(
      this.value
    );


  }
  getvalue3(){
    this.value="epargne";
    this.sendDataToBody.emit(
      this.value
    );

  }
  getvalue4(){
    this.value="revenue";
    this.sendDataToBody.emit(
      this.value
    );

  }
  getvalue5(){
    this.value="article";
    this.sendDataToBody.emit(
      this.value
    );

  }

}
