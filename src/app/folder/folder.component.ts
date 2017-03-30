import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from "../api.service";
import {ContextMenuService} from "../context-menu.service";

@Component({
  selector: 'fs-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent implements OnInit {
  @Input() file:any;
  @Input() folder: any;
  @Input() id?: string;
  @Input() name:string;
  private expanded: boolean = false;


  constructor(private apiService: ApiService, private contextMenuService: ContextMenuService) {
    this.folder = this.folder || { children: [] };

  }

  ngOnInit() {
      this.apiService.getFolderById(this.id).subscribe((response) => {
      this.folder = response.item;
      console.log(this.folder.name + 'oninit folder');
      }, (err) => {

    });
  }
  showContent(){
    debugger;
    alert(this.folder.name);
    this.expanded =!this.expanded;
    this.apiService.onFolderChange.next(this.folder);
 }

  addNewFolder() {
    debugger;
      this.apiService.createItem(this.folder._id, 'folder', prompt('please enter folder name')).subscribe((response) => {
      if (!response.success) { console.log(response.message); return; }
      this.folder.children.push(response.item);
    });
  }
  addNewFile(){
    debugger;
    this.apiService.createItem(this.folder._id, 'file', prompt('please enter file name')).subscribe((response) => {
      if (!response.success) { console.log(response.message); return; }
      this.folder.children.push(response.item);
    });
  }


  rename(){
    debugger;
    let newName = prompt('enter new name');
    this.folder.name = newName;
    this.apiService.updateItem(this.folder._id, this.folder).subscribe((response)=>{
      if (!response.success) { console.log(response.message); return; }
    });

  }
   deleteItem(){
    debugger;
     this.apiService.deleteItem(this.folder._id).subscribe((response)=>{
     if (!response.success) { console.log(response.message); return; }

   });

   }

  contextMenuEventHandler(event) {
    alert(this.folder.name);
  let menu =
  {
    event: event,

    items: [
      { name: 'new folder ' , callback: () => this.addNewFolder() },
      { name: 'new file ' , callback: () => this.addNewFile()},
      { name: 'rename ' , callback: () => this.rename()},
      { name: 'delete ' , callback: () => this.deleteItem() }
    ]
  };

  this.contextMenuService.select(menu);
  return false;
}
}
