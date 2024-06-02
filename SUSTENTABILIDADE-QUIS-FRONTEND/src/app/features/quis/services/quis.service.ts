import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuisService {
  QUIS_URL = environment.API + '/v1/quis/';

  constructor(private http: HttpClient) {}

  sendOptionSelected(option: number): Observable<any> {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(
      `${this.QUIS_URL}resposta?codPergunta=${option}`,
      { headers: headers }
    );
  }
}
