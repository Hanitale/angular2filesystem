import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
  export class ApiService {
  readonly OWNER:string = 'Marco';
  private apiUrl:string = 'http://hosting.webis.co.il:8085/api';
  public folder:any;

  constructor(private http:Http) { }

  getFolderById(id?: string) {
    return this.http.get(this.apiUrl + '/items/get/' + this.OWNER + (id ? '/' + id : ''))
      .map((data: Response) => { return data.json(); })
      .catch((err: Response) => {
        return Observable.throw(err)
      });
  }

  createItem(parentId: string, type: string, name: string) {
    return this.http.post(this.apiUrl + '/items/create/', { parentId: parentId, type: type, name: name, owner: this.OWNER })
      .map((data: Response) => { return data.json(); })
      .catch((err: Response) => {
        return Observable.throw(err)
      });
  }

  deleteItem(id){
    debugger;
    let url = this.apiUrl + '/items/delete/';
    let myId = id !== undefined ? id : '';
    let both = url+myId;
    return this.http.get(both)
      .map((data: Response) => { return data.json(); })
      .catch((err: Response) => {
        return Observable.throw(err)});
  }

  updateItem(id:string, item:any){
    debugger;
    let url = this.apiUrl + '/items/update/';
    let myId = id!== undefined ? id : '';
    let both = url + myId;
    return this.http.post(both, item)
    .map((data: Response) => { return data.json(); })
    .catch((err: Response) => {
     return Observable.throw(err)});
  }

}
