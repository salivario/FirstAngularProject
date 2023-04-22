import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../interfaces/iclient';
import { IClients } from '../interfaces/iclients';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientReturnerService {

  private apiUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) { }
  deleteClient(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  getRequests(): Observable<IClients[]> {
    return this.http.get<IClients[]>(this.apiUrl)
  }
  
}
