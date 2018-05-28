import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualToolbarDemoComponent } from './contextual-toolbar-demo.component';

describe('ContextualToolbarDemoComponent', () => {
  let component: ContextualToolbarDemoComponent;
  let fixture: ComponentFixture<ContextualToolbarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextualToolbarDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextualToolbarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
