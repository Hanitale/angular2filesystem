export class Folder {
  public name: string;
  public id: string;
  public imagePath: string;
  public children: any[];
  constructor(item){
  this.name = item.name;
  this.id = item._id;
  this.children = item.children;
}

}
