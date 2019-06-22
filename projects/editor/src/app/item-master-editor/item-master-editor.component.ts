import { Component, OnInit, Input } from '@angular/core';
import { ItemMaster } from '../../../../gentrail-common/src/lib/model/item-master';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemMasterService } from '../../../../gentrail-common/src/lib/services/item-master.service';

@Component({
  selector: 'app-item-master-editor',
  template: `
    <span>
      ID: {{item?.itemId || 'New'}}
    </span>
    <form [formGroup]="form">
      <mat-form-field class="item-master-editor-full-width">
        <input matInput placeholder="Short Name" formControlName="shortName">
      </mat-form-field>
      <mat-form-field class="item-master-editor-full-width">
        <input matInput placeholder="Description" formControlName="description">
      </mat-form-field>
      <button mat-button (click)="deleteItem()">Delete</button>
      <button mat-button (click)="clear()">New</button>
      <button mat-button (click)="saveItem()">Save</button>
    </form>
  `,
  styles: [`
    .item-master-editor-full-width {
      width: 100%;
    }
  `]
})
export class ItemMasterEditorComponent implements OnInit {

  private _item: ItemMaster;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private itemMasterService: ItemMasterService) {
    this.form = this.formBuilder.group({
      shortName: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  @Input() set item(item: ItemMaster) {
    this._item = item;
    if (item) {
      this.form.setValue({shortName: item.shortName || '', description: item.description || ''});
    }

  }

  get item(): ItemMaster {
    return this._item;
  }

  getValue(): ItemMaster {
    return this.form.getRawValue();
  }

  saveItem(): void {
    const value = this.getValue() as ItemMaster;
    if (this.item && this.item.itemId) {
      this.itemMasterService.update({itemId: this.item.itemId, ...value});
    } else {
      this.itemMasterService.create(value);
      this.clear();
    }
  }

  deleteItem(): void {
    if (this.item && this.item.itemId) {
      this.itemMasterService.delete(this.item);
      this.clear();
    }
  }

  clear() {
    this.item = {itemId: null, description: '', shortName: ''};
  }


}
