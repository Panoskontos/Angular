import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBox2Component } from './image-box2.component';

describe('ImageBox2Component', () => {
  let component: ImageBox2Component;
  let fixture: ComponentFixture<ImageBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBox2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
