import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {
 @Input() cheminImage:any = "assets/img/credit.png";

  constructor() { }

  ngOnInit(): void {
  }

}
