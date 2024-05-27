import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  AUTH_URL = environment.API + '/auth';

  constructor(
    private http: HttpClient
  ) { }

  signIn(email: string, senha: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': '*'
    });
    let options = { headers: headers };
    const body = {
      email,
      senha
    }
    return this.http.post<any>(`${this.AUTH_URL}`, body, options);
  }
}