import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  typeSearch="";

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
   
  ngOnInit(): void {
    const currentRoute = this.router.url;
    this.typeSearch=currentRoute.replace("/", "");

  }
}
