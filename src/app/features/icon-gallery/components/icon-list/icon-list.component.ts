import { Component } from '@angular/core';
import { IconService } from 'src/app/core/services/icon.service';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent {
  icons: any[] = [];

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
    this.iconService.getIcons().subscribe(
      data => {
        this.icons = data;
      },
      error => {
        console.error('Error al obtener los iconos', error);
      }
    );
  }


}
