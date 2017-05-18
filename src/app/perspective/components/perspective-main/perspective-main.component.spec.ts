import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectiveMainComponent } from './perspective-main.component';

describe('PerspectiveMainComponent', () => {
  let component: PerspectiveMainComponent;
  let fixture: ComponentFixture<PerspectiveMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerspectiveMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
