import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMasterTableComponent } from './item-master-table.component';

describe('ItemMasterTableComponent', () => {
  let component: ItemMasterTableComponent;
  let fixture: ComponentFixture<ItemMasterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMasterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMasterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
