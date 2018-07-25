import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private headers: Headers;

  constructor(private http: Http) 
  {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  
  }

  public traerTodo(entidad: string)
  {
    return this.http.get(
      environment.rutaApi + entidad +'/traer-todo', {headers: this.headers}
    )
    .pipe(
      map(data => data.json())
    )
  }
}