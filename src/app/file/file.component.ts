import { Component } from '@angular/core';
import { ApiService} from "../api.service";
import {ContextMenuService} from "../context-menu.service";


@Component({
  selector: 'fs-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],

})
export class FileComponent {

  private file: any;
  // @Input() _id?: string;

  constructor(private apiService: ApiService , private contextMenuService:ContextMenuService) {
this.file = {};
  }
  openFile(){
    console.log(this.file.content);

  }
  rename(){
    debugger;
    let newName = prompt('enter new name');
    this.file.name = newName;
    this.apiService.updateItem(this.file._id, this.file).subscribe((response)=>{
      if (!response.success) { console.log(response.message); return; }
    });

  }
  deleteItem(){
    debugger;
    this.apiService.deleteItem(this.file._id).subscribe((response)=>{
      if (!response.success) { console.log(response.message); return; }

    });

  }
  contextMenuEventHandler(event) {
    alert(this.file.name);
    let menu =
      {
        event: event,

        items: [
          { name: 'open file ' , callback: () => this.openFile()},
          { name: 'rename ' , callback: () => this.rename()},
          { name: 'delete ' , callback: () => this.deleteItem() }
        ]
      };

    this.contextMenuService.select(menu);
    return false;
  }
}
