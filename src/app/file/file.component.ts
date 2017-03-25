import { Component, Input } from '@angular/core';
import { ApiService} from "../api.service";

@Component({
  selector: 'fs-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],

})
export class FileComponent {

  private file: any;
  @Input() id?: string;

  constructor(private apiService: ApiService) {

  }

}
