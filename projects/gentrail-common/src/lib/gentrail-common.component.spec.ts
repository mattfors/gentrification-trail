import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GentrailCommonComponent } from './gentrail-common.component';

describe('GentrailCommonComponent', () => {
  let component: GentrailCommonComponent;
  let fixture: ComponentFixture<GentrailCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GentrailCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GentrailCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
