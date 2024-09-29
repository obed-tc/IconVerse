import { Component } from '@angular/core';
import { IconListComponent } from '../../components/icon-list/icon-list.component';
import { SearchService } from 'src/app/core/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-icon-detail-page',
  templateUrl: './icon-detail-page.component.html',
  styleUrls: ['./icon-detail-page.component.css'],
})
export class IconDetailPageComponent {
typeSearch="";

  constructor(private searchService: SearchService,private activatedRoute: ActivatedRoute, private router: Router) { }
   
  ngOnInit(): void {
    const currentRoute = this.router.url;
    this.typeSearch=currentRoute.replace("/", "");

  }
}
