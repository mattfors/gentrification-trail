import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemMaster } from '../../../../gentrail-common/src/lib/model/item-master';
import { ItemMasterService } from '../../../../gentrail-common/src/lib/services/item-master.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-item-master-table',
  template: `
    <mat-table [dataSource]="dataSource" class="item-master-table-container">
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
      <mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;" (click) = "onRowClicked(row)"></mat-row>
    </mat-table>
  `,
  styles: [`
    .item-master-table-container {
      overflow-x: scroll;
      height: 400px;
    }
  `]
})
export class ItemMasterTableComponent implements OnInit {

  readonly dataSource = new ItemMasterDataSource(this.itemMaster);
  readonly displayedColumns = ['itemId', 'shortName', 'description'];

  @Output() itemMasterSelected: EventEmitter<ItemMaster> = new EventEmitter<ItemMaster>();

  constructor(private itemMaster: ItemMasterService) { }

  ngOnInit() {
  }

  onRowClicked(row: ItemMaster): void {
    this.itemMasterSelected.emit(row);
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
