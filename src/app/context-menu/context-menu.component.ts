import { Component, OnInit, Input } from '@angular/core';
import { ContextMenuService } from '../context-menu.service';

@Component({
  selector: 'context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css'],
})
export class ContextMenuComponent implements OnInit {
  @Input() menu: any;
  shown: boolean = false;
  style: any;

  constructor(private contextMenuService: ContextMenuService) { }

  ngOnInit() {
    this.contextMenuService.selected.subscribe((menu) => {
      if (menu) {
        this.shown = true;
        this.style = { position: 'absolute', top: menu.event.clientY + 'px', left: menu.event.clientX + 'px' }
        this.menu = menu.items;
      }
    })
  }

}
