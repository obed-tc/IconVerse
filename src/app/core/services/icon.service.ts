import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class IconService {


  private jsonPath = 'assets/icons/output/all-icons.json'; // Ruta del JSON generado

  constructor(private http: HttpClient) {}

  getIcons(): Observable<string[]> {
    return this.http.get<string[]>(this.jsonPath);
  }
  
}
