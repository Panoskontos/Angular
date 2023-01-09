import { GetDataService } from './image-box2/get-data.service';
import { ImageBox2Service } from './image-box2.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBoxComponent } from './image-box.component';
import { ImageBox2Component } from './image-box2/image-box2.component';
import { TitleComponent } from './image-box2/title/title.component';

@NgModule({
  declarations: [
    AppComponent, ImageBoxComponent, ImageBox2Component, TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageBox2Service, GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
