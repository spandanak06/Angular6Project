import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentnameComponent } from './deparmentname.component';

describe('DeparmentnameComponent', () => {
  let component: DeparmentnameComponent;
  let fixture: ComponentFixture<DeparmentnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparmentnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
