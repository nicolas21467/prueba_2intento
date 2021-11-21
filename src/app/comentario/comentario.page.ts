import { Component, OnInit } from '@angular/core';
import { ApiService }from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {
  datos:any;
  idPersona:string;
  constructor(private api : ApiService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async p => {
      this.idPersona = p.get('id');    
    })
    this.leer();
  }
  async leer(){
    await this.api.getComment(this.idPersona);
    this.datos = this.api.listado;
    console.log("metodo leer" + this.datos)
    console.log(this.idPersona);
  }
}
