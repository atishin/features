import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxLayerComponent } from './paralax-layer.component';

describe('ParalaxLayerComponent', () => {
  let component: ParalaxLayerComponent;
  let fixture: ComponentFixture<ParalaxLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParalaxLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalaxLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
