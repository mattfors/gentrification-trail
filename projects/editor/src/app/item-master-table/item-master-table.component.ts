import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemMaster } from '../../../../gentrail-common/src/lib/model/item-master';
import { ItemMasterService } from '../../../../gentrail-common/src/lib/services/item-master.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-item-master-table',
  template: `
    <mat-table [dataSource]="dataSource">
      <ng-container matColumnDef="itemId">
        <mat-header-cell *matHeaderCellDef> Item Id </mat-header-cell>
        <mat-cell *matCellDef="let item"> {{item.itemId}} </mat-cell>
      </ng-container>
      <ng-container matColumnDef="shortName">
        <mat-header-cell *matHeaderCellDef> Short Name </mat-header-cell>
        <mat-cell *matCellDef="let item"> {{item.shortName}} </mat-cell>
      </ng-container>
      <ng-container matColumnDef="description">
        <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>
        <mat-cell *matCellDef="let item"> {{item.description}} </mat-cell>
      </ng-container>
      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;" (click) = "rowClicked(row)"></mat-row>
    </mat-table>
  `,
  styles: []
})
export class ItemMasterTableComponent implements OnInit {

  readonly dataSource = new ItemMasterDataSource(this.itemMaster);
  readonly displayedColumns = ['itemId', 'shortName', 'description'];
  private itemMaterClick: EventEmitter<ItemMaster> = new EventEmitter<ItemMaster>();

  constructor(private itemMaster: ItemMasterService) { }

  ngOnInit() {
    this.itemMaterClick = new EventEmitter<ItemMaster>();
  }

  rowClicked(row: ItemMaster): void {
    this.itemMaterClick.emit(row);
  }

}

export class ItemMasterDataSource extends DataSource<any> {
  constructor(private itemMaster: ItemMasterService) {
    super();
  }
  connect(): Observable<ItemMaster[]> {
    return this.itemMaster.getItemMasters();
  }
  disconnect() {}
}
