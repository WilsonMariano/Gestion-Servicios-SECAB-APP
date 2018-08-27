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

  public traer(entidad: string, id: number)
  {
    return this.http.get(
      environment.rutaApi + entidad +'/traer/'+ id.toString(), 
      {headers: this.headers}
    )
    .pipe(
      map(data => data.json())
    )
  }

  public traerTodo(entidad: string)
  {
    return this.http.get(
      environment.rutaApi + entidad +'/traer-todo', 
      {headers: this.headers}
    )
    .pipe(
      map(data => data.json())
    )
  }

  public insertarUno(entidad: string, objeto)
  {
    return this.http.post
    (
      environment.rutaApi + entidad +"/insertar",
      objeto,
      { headers: this.headers }
    )
    .pipe(
      map(data => data.json())
    )
  }

  public editarUno(entidad: string, objeto)
  {
    console.log(entidad);
    console.log(objeto);
    return this.http.post
    (
      environment.rutaApi + entidad +"/editar",
      objeto,
      { headers: this.headers }
    )
    .pipe(
      map(data => data.json())
    )
  }
}
