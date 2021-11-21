import { Injectable } from '@angular/core';
import {HttpClient} from HttpClient;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  listado =[];
  datos:any;
  private apiURL ='https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) { }

  getUsers(){
    let url = this.apiURL +'users';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data:[]) => {
        data.forEach(item =>{this.listado.push(item)});
        console.table(this.listado);
      },
      error =>{console.log("error en obtener usuarios")})
    })
  }
  getUser(id:string){
    let url = this.apiURL +'users/' + id;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data:any) => {
        this.datos=data;
        console.log(this.datos);
      },
      error => {
        console.log("error en el usuario");
      })
    })

  }
  getPost(id:string){
    this.listado=[];
    this.datos ="";
    let url = this.apiURL +'users/' + id + '/posts';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data:any) =>{
        data.forEach(item=>{this.listado.push(item)});
        console.table(this.listado);
      },
      error =>{
        console.log("error en el post");
      })
    })
  }
  getComment(id:string){
    this.listado=[];
    this.datos ="";
    let url = this.apiURL +'posts/' + id + '/comments';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data:any) =>{
        data.forEach(item=>{this.listado.push(item)});
        console.table(this.listado);
      },
      error =>{
        console.log("error en el comentario");
      })
    })
  }
}
