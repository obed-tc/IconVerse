import { Component } from '@angular/core';
import { IconService } from 'src/app/core/services/icon.service';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent {
  icons: string[] = [];
  constructor(private iconService: IconService) {}
  ngOnInit(): void {
    this.iconService.getIcons().subscribe({
      next: (data) => {
        this.icons = data;
      },
      error: (err) => {
        console.error('Error loading icons: ', err);
      }
    });
  }

}
