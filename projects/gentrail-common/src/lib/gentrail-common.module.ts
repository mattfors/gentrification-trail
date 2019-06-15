import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../editor/src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    CommonModule
  ],
  providers: [AngularFirestore],
  exports: []
})
export class GentrailCommonModule { }
