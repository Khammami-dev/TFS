import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-pret',
  templateUrl: './form-pret.component.html',
  styleUrls: ['./form-pret.component.css']
})
export class FormPretComponent implements OnInit {
  show=true;

  constructor() { }

  ngOnInit(): void {
  }


  changeShow(){
    this.show=false;
  }

}
