import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class IconService {


  private jsonPath = 'assets/output/';

  constructor(private http: HttpClient) {}

  getIconsFlutter(): Observable<string[]> {
    return this.http.get<string[]>(this.jsonPath+"flutter/all-icons.json");
  }
  getIconsSuint(): Observable<string[]> {
    return this.http.get<string[]>(this.jsonPath+"suint/all-icons.json");
  }
  getSvgContent(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}
