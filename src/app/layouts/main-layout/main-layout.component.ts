import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconListComponent } from 'src/app/features/icon-gallery/components/icon-list/icon-list.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  standalone: true,
  styleUrls: ['./main-layout.component.css'],
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent],
})
export class MainLayoutComponent {}
