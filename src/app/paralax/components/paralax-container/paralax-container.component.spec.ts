import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxContainerComponent } from './paralax-container.component';

describe('ParalaxContainerComponent', () => {
  let component: ParalaxContainerComponent;
  let fixture: ComponentFixture<ParalaxContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParalaxContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalaxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
