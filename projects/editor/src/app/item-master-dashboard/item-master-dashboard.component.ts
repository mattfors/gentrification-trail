import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ItemMaster } from '../../../../gentrail-common/src/lib/model/item-master';
import { ItemMasterEditorComponent } from '../item-master-editor/item-master-editor.component';
import { ItemMasterService } from '../../../../gentrail-common/src/lib/services/item-master.service';

@Component({
  selector: 'app-item-master-dashboard',
  template: `
    <div class="grid-container">
      <h1 class="mat-h1">Item Master</h1>
      <mat-grid-list cols="2" rowHeight="500px">
        <mat-grid-tile>
          <mat-card class="dashboard-card">
            <mat-card-header>
              <mat-card-title>
              </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">
              <div>
                <app-item-master-table (itemMasterSelected)="item = $event"></app-item-master-table>
              </div>
            </mat-card-content>
          </mat-card>
        </mat-grid-tile>
        <mat-grid-tile>
          <mat-card class="dashboard-card">
            <mat-card-header>
              <mat-card-title>


              </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">
              <div>
                <app-item-master-editor [item]="item"></app-item-master-editor>
              </div>
            </mat-card-content>
          </mat-card>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [`
    .grid-container {
      margin: 20px;
    }
    .dashboard-card {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
    }
    .more-button {
      position: absolute;
      top: 5px;
      right: 10px;
    }
    .dashboard-card-content {
      text-align: center;
    }
  `]
})
export class ItemMasterDashboardComponent {
  item: ItemMaster;

  constructor() {}


}
