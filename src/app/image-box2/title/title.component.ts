import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  title = 'Top Ye'
  printTitle() {
    return ` My name is Vegeta ${this.title}`
  }

}
