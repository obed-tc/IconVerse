import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSubject = new BehaviorSubject<string>('');
  private typeIconSubject = new BehaviorSubject<string>('all');


  search$ = this.searchSubject.asObservable();
  typeIcon$ = this.typeIconSubject.asObservable();


  updateSearchTerm(term: string) {
    this.searchSubject.next(term);
  }

  changeTypeIcon(type:string){
    this.typeIconSubject.next(type);
  }
}
