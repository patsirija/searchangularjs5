import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterapmComponent } from './registerapm.component';

describe('RegisterapmComponent', () => {
  let component: RegisterapmComponent;
  let fixture: ComponentFixture<RegisterapmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterapmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterapmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
