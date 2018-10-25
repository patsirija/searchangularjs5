import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EprofileComponent } from './eprofile.component';

describe('EprofileComponent', () => {
  let component: EprofileComponent;
  let fixture: ComponentFixture<EprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
