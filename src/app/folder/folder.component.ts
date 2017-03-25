import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from "../api.service";
import {ContextMenuService} from "../context-menu.service";

@Component({
  selector: 'fs-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent implements OnInit {
  test:string = '';
  private folder: any;
  @Input() id?: string;
  @Input() name:string;
  private expanded: boolean = false;
  private counter:number = 0;
  private defaultName:string;


  constructor(private apiService: ApiService, private contextMenuService: ContextMenuService) {
    this.folder = this.folder || { children: [] };
    this.name = this.name || this.giveDefaultName();
  }

  ngOnInit() {
      this.apiService.getFolderById(this.id).subscribe((response) => {
      this.folder = response.item;
      console.log(this.folder);
      }, (err) => {

    });
  }
  addNewFolder() {
      this.apiService.createItem(this.folder._id, 'folder', this.name).subscribe((response) => {
      if (!response.success) { console.log(response.message); return; }
      this.folder.children.push(response.item);
    });
  }
  addNewFile(){
    this.apiService.createItem(this.folder._id, 'file', this.name).subscribe((response) => {
      if (!response.success) { console.log(response.message); return; }
      this.folder.children.push(response.item);
    });
  }
  giveDefaultName():string{
    this.counter++;
    return this.defaultName = 'new Folder'+this.counter;
   }

  Update(){
    this.apiService.updateItem(this.id, this.name, null).subscribe((response)=>{
      if (!response.success) { console.log(response.message); return; }
    });

  }
   deleteItem(){
   this.apiService.deleteItem(this.id).subscribe((response)=>{
     if (!response.success) { console.log(response.message); return; }

   });

   }

  contextMenuEventHandler(event) {
  let menu =
  {
    event: event,
    items: [
      { name: 'new folder ' + this.id, callback: () => this.addNewFolder() },
      { name: 'new file ' + this.name, callback: () => this.addNewFile()},
      { name: 'rename ' + this.name, callback: () => this.Update()},
      { name: 'delete ' + this.id, callback: () => this.deleteItem() }
    ]
  };

  this.contextMenuService.select(menu);
  return false;
}
}
