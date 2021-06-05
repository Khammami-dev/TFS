import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fom-epargne',
  templateUrl: './fom-epargne.component.html',
  styleUrls: ['./fom-epargne.component.css']
})
export class FomEpargneComponent implements OnInit {
  onSubmit(formulaire: ngForm){
    console.log(formulaire);
  }
  show=true;

  constructor() { }

  ngOnInit(): void {
  }
  changeShow(){
    this.show=false;
  }
}
