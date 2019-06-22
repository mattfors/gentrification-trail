import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatTableModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule } from '@angular/material';
import { GentrailCommonModule } from '../../../gentrail-common/src/lib/gentrail-common.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ItemMasterTableComponent } from './item-master-table/item-master-table.component';
import { ItemMasterEditorComponent } from './item-master-editor/item-master-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemMasterDashboardComponent } from './item-master-dashboard/item-master-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    ItemMasterTableComponent,
    ItemMasterEditorComponent,
    ItemMasterDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GentrailCommonModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
