
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {
 @Input() cheminImage:String = "";
 @Input()  propertyTitle:String = "";
 @Output() sendDataToHeader = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.sendDataToHeader.emit(
      {
        imagePath: this.cheminImage ,
        title: this.propertyTitle ,

      }
    );
  }

}
