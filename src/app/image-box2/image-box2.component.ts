import { GetDataService } from './get-data.service';
import { Component, OnInit } from '@angular/core';
import { ImageBox2Service } from '../image-box2.service';

@Component({
  selector: 'app-image-box2',
  templateUrl: './image-box2.component.html',
  styleUrls: ['./image-box2.component.css']
})
export class ImageBox2Component implements OnInit {
  chars;
  constructor(service: GetDataService){
    this.chars = service.getChars()
  }

  ngOnInit(){}

}
