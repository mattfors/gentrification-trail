import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { ItemMaster } from '../model/item-master';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemMasterService {

  constructor(private firestore: AngularFirestore) { }

  getItemMasters(): Observable<ItemMaster[]> {
    return this.firestore.collection('item-master').snapshotChanges().pipe(map((actionArray: DocumentChangeAction<ItemMaster>[]) => {
      return actionArray.map((action: DocumentChangeAction<ItemMaster>) => {
        return {
          itemId: action.payload.doc.id,
          ...action.payload.doc.data()
        };
      });
    }));
  }

  create(itemMaster: ItemMaster) {
    this.firestore.collection<ItemMaster>('item-master').add(itemMaster);
  }

  delete(itemMaster: ItemMaster) {
    this.firestore.collection('item-master').doc(itemMaster.itemId).delete();
  }

  update(itemMaster: ItemMaster) {
    this.firestore.collection('item-master').doc(itemMaster.itemId).set(itemMaster);
  }
}
