import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropDemoComponent } from './backdrop-demo.component';

describe('BackdropDemoComponent', () => {
  let component: BackdropDemoComponent;
  let fixture: ComponentFixture<BackdropDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackdropDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdropDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
