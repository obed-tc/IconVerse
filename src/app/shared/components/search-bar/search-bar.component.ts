import { Component } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {

  constructor(private searchService:SearchService){}

  typeSearch="all";
  
  ngOnInit(): void {
    this.searchService.typeIcon$.subscribe((typeIcon: string) => {
      this.typeSearch=typeIcon
    });
  }

  onSearch(event:Event){
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value;
    this.searchService.updateSearchTerm(searchTerm);

  }

}
