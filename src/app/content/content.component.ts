import { Component, OnInit ,Input} from '@angular/core';
import {ApiService} from "../api.service";


@Component({
  selector: 'fs-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private folder: any;
  @Input() id?: string;
  @Input() file:any;

  constructor(private apiService: ApiService) {
    // this.folder = this.folder || { children: [] };
    this.folder = {};
    this.apiService.onFolderChange.subscribe((folder)=>{
      this.folder = folder;
    });
  }

  ngOnInit() {
      // this.apiService.getFolderById(this.id).subscribe((response) => {
      // this.folder = response.item;
    //   }, (err) => {
    // });
  }

}
