import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxMainComponent } from './paralax-main.component';

describe('ParalaxMainComponent', () => {
  let component: ParalaxMainComponent;
  let fixture: ComponentFixture<ParalaxMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParalaxMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalaxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
