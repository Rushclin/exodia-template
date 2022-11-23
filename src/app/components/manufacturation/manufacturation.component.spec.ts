import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturationComponent } from './manufacturation.component';

describe('ManufacturationComponent', () => {
  let component: ManufacturationComponent;
  let fixture: ComponentFixture<ManufacturationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
