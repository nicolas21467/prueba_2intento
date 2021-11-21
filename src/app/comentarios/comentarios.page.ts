import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {
 listado =[];
 datos:any;
  constructor(private api:ApiService) { }

  ngOnInit() {
  }
  listar(){
    this.datos = localStorage.getItem("1")
    this.api.getPost(this.datos);
    this.listado = this.api.listado;
  }

}
