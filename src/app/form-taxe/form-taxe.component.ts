import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-taxe',
  templateUrl: './form-taxe.component.html',
  styleUrls: ['./form-taxe.component.css']
})
export class FormTaxeComponent implements OnInit {
  show = true;

  constructor() { }


  ngOnInit(): void {
  }
  changeShow(){
    this.show=false;
  }
}
