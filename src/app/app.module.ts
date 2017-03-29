import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService} from "./api.service";
import { FolderComponent } from './folder/folder.component';
import { FileComponent } from './file/file.component';
import { TreeComponent } from './tree/tree.component';
import { ContentComponent } from './content/content.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ContextMenuService} from "./context-menu.service";
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    FileComponent,
    TreeComponent,
    ContentComponent,
    ContextMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService, ContextMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
