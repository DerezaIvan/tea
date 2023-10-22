import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogType } from '../components/types/catalog.types';

@Injectable({
  providedIn: 'root',
})
export class TeaService {
  private catalog: CatalogType[] = [];

  private apiUrl = 'https://testologia.site/tea';
  constructor(private http: HttpClient) {}

  getTeaProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTeaProduct(id: number): Observable<CatalogType> {
    return this.http.get<CatalogType>(`https://testologia.site/tea?id=${id}`);
  }
}
