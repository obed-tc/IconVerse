import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [RouterLink],
})
export class SidebarComponent {
  constructor(private searchService: SearchService) {}

  changeTypeIcon(typeIcon: string) {
    this.searchService.changeTypeIcon(typeIcon);
  }
}
