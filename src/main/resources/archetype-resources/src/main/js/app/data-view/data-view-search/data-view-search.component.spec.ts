import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewSearchComponent } from './data-view-search.component';

describe('DataViewSearchComponent', () => {
  let component: DataViewSearchComponent;
  let fixture: ComponentFixture<DataViewSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataViewSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataViewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
