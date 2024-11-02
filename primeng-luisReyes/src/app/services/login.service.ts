import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl= "https://localhost:7128/api/users";

  constructor(private http: HttpClient) { }
  login(username: String, password: String):Observable<any>{
    const body = {username,password};

    return this.http.post(`${this.apiUrl}/login`,{username,password})
    //post necesita la url base y los datos
    //metodo post envia
    //" ` " es la que se usa para que tome un valor que le enviemos en su url, junto al simbolo de "$"
  }
  register(username: String, password: String):Observable<any>{
    const body = {username,password};

    return this.http.post(`${this.apiUrl}/register`,{username,password})
    //post necesita la url base y los datos
    //metodo post envia
    //" ` " es la que se usa para que tome un valor que le enviemos en su url, junto al simbolo de "$"
  }
}
