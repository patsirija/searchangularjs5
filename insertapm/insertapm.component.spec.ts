import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertapmComponent } from './insertapm.component';

describe('InsertapmComponent', () => {
  let component: InsertapmComponent;
  let fixture: ComponentFixture<InsertapmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertapmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertapmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
