import { Component } from '@angular/core';
import { ItemMaster } from '../../../gentrail-common/src/lib/model/item-master';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'editor';

  item: ItemMaster;
}
