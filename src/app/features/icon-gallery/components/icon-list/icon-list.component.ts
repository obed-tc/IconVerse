import { Component } from '@angular/core';
import { IconService } from 'src/app/core/services/icon.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent {
  icons: any[] = [];
  filteredItems: any[]=[];


  constructor(private iconService: IconService,private searchService: SearchService) { }

  ngOnInit(): void {
    this.iconService.getIcons().subscribe(
      data => {
        this.icons = data;
        this.filteredItems=this.icons;
      },
      error => {
        console.error('Error al obtener los iconos', error);
      }
    );


    this.searchService.search$.subscribe((term: string) => {
        this.filteredItems = this.icons.filter(item =>
          item.name.toLowerCase().includes(term.toLowerCase())
  
        );
    });

  }


}
