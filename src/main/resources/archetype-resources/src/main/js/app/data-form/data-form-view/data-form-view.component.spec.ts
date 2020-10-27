import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormViewComponent } from './data-form-view.component';

describe('DataFormViewComponent', () => {
  let component: DataFormViewComponent;
  let fixture: ComponentFixture<DataFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
