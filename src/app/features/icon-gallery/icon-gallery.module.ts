import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconListComponent } from './components/icon-list/icon-list.component';
import { IconItemComponent } from './components/icon-item/icon-item.component';
import { IconSidebarComponent } from './components/icon-sidebar/icon-sidebar.component';
import { IconDetailPageComponent } from './pages/icon-detail-page/icon-detail-page.component';
import { FilterIconsPipe } from './pipes/filter-icons.pipe';
import { NameFilePipe } from './pipes/name-file.pipe';



@NgModule({
  declarations: [
    IconListComponent,
    IconItemComponent,
    IconSidebarComponent,
    IconDetailPageComponent,
    FilterIconsPipe,
    NameFilePipe
  ],
  imports: [
    CommonModule,
  ]
})
export class IconGalleryModule { }
