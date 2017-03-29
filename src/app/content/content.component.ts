import { Component, OnInit ,Input} from '@angular/core';
import {ApiService} from "../api.service";
import {ContextMenuService} from "../context-menu.service";

@Component({
  selector: 'fs-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() folder: any;
  @Input() id?: string;
  constructor(private apiService: ApiService, private contextMenuService:ContextMenuService) {
    this.folder = this.folder || { children: [] };
  }

  ngOnInit() {
      this.apiService.getFolderById(this.id).subscribe((response) => {
      this.folder = response.item;
      console.log(this.folder.name + 'oninit content');
    }, (err) => {

    });
  }

}
