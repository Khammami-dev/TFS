import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EpargneService} from '../services/epargne.service';

@Component({
  selector: 'app-fom-epargne',
  templateUrl: './fom-epargne.component.html',
  styleUrls: ['./fom-epargne.component.css']
})
export class FomEpargneComponent implements OnInit {

  onSubmit(formulaire: NgForm){
    return (formulaire.value);
  }
  show=true;

  constructor( /*private epargneService: EpargneService*/ ) { }

  ngOnInit(): void {
  }
  changeShow(){
    this.show=false;
  }

}
