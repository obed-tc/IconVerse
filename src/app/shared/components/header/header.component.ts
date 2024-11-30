import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [SearchBarComponent, ToggleThemeComponent],
  standalone: true,
})
export class HeaderComponent {
  typeSearch = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    this.typeSearch = currentRoute.replace('/', '');
  }
}
