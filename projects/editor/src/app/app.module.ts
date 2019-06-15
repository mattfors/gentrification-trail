import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { GentrailCommonModule } from '../../../gentrail-common/src/lib/gentrail-common.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ItemMasterTableComponent } from './item-master-table/item-master-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemMasterTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GentrailCommonModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
