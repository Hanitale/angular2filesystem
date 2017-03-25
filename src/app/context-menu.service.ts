import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContextMenuService {

  selected: Subject<any> = new Subject();

  constructor() { }

  select(menu) {
    this.selected.next(menu);
  }

}
