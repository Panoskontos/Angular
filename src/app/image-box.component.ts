import { Component } from "@angular/core";
import { ImageBox2Service } from "./image-box2.service";


@Component({
    selector: 'image-box',
    templateUrl: './image-box.component.html',
    styleUrls: ['./image-box.component.css']
})

export class ImageBoxComponent{
    name = 'hasbullah';
    chars;
  constructor(service: ImageBox2Service){
    this.chars = service.getChars()
  }

  ngOnInit(){}
}