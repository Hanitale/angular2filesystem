import { Component, OnInit } from '@angular/core';
import {FolderComponent} from "../folder/folder.component";
import {Folder} from "../folder/folder.model";

@Component({
  selector: 'fs-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  folderList: Folder[] = [
    new Folder({"name": "sub1","parentId": "58d3792dd6df735016a908d3", "owner": "58d3791fd6df735016a908cc","_id": "58d37a1cd6df735016a908d8"})
  ];
  constructor() { }

  ngOnInit() {
  }

}
