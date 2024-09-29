import { Component } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private searchService:SearchService){}

  changeTypeIcon(typeIcon:string){
    this.searchService.changeTypeIcon(typeIcon);
  }


}
