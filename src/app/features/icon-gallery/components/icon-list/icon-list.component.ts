import { Component } from '@angular/core';
import { IconService } from 'src/app/core/services/icon.service';
import { SearchService } from 'src/app/core/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IconItemComponent } from '../icon-item/icon-item.component';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css'],
  standalone: true,
  imports: [IconItemComponent],
})
export class IconListComponent {
  icons: any[] = [];
  filteredItems: any[] = [];
  typeSearch = 'all';

  itemsPerPage = 301;
  currentPage = 1;

  constructor(
    private iconService: IconService,
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    this.typeSearch = currentRoute.replace('/', '');

    this.searchService.changeTypeIcon(this.typeSearch);

    if (this.typeSearch == 'flutter') {
      this.getIconsFlutter();
    } else if (this.typeSearch == 'suint') {
      this.getIconsSuint();
    }

    this.searchService.typeIcon$.subscribe((typeIcon: string) => {
      this.typeSearch = typeIcon;
    });

    this.searchService.search$.subscribe((term: string) => {
      this.filteredItems = this.icons.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      this.currentPage = 1; // Reiniciar a la primera página al buscar
    });
  }

  getIconsFlutter() {
    this.iconService.getIconsFlutter().subscribe(
      (data) => {
        this.icons = data;
        this.filteredItems = this.icons;
      },
      (error) => {
        console.error('Error al obtener los iconos', error);
      }
    );
  }
  getIconsSuint() {
    this.iconService.getIconsSuint().subscribe(
      (data) => {
        this.icons = data;
        this.filteredItems = this.icons;
      },
      (error) => {
        console.error('Error al obtener los iconos', error);
      }
    );
  }

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredItems.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
