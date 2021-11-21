import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';
import{Router,}from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  listado=[];
  constructor(private api: ApiService, private ToastController:ToastController,private router:Router) { }

  ngOnInit() {
    this.api.getUsers();
  }
  async verificar(nombre:HTMLInputElement,password:HTMLInputElement){
    let listado= this.api.listado;
    let usuario = nombre.value;
    let clave =password.value;
    let validar =false;

    if (usuario.trim().length ==3 && clave.trim().length ==3){
    const toast = await this.ToastController.create({
      message:'los valores ingresados no son validos',
      duration: 3000,
      color:'primary'

    });
    toast.present();
    return toast;
  }
  else if(usuario.trim().length == 0){
    const toast = await this.ToastController.create({
      message:'porfavor rellene el usuario',
      duration: 3000,
      color:'primary'

    });
    toast.present();
    return toast;
  }
  else if(clave.trim().length == 0){
    const toast = await this.ToastController.create({
      message:'porfavor rellene la contraseña con una valida',
      duration: 3000,
      color:'primary'

    });
    toast.present();
    return toast;
  }
  else if(clave != "1234"){
    const toast = await this.ToastController.create({
      message:'la contraseña no es valida ',
      duration: 3000,
      color:'primary'

      });
      toast.present();
      return toast;
    }
    for (let usuarios of listado){
      if (usuarios.username == nombre.value){
        validar = true;
        localStorage.lengt +1;
        localStorage.setItem("1",usuarios.id)
      }
    }
      if(validar ==false || usuario != nombre.value){
        const toast = await this.ToastController.create({
        message:'el usuario no es valido ',
        duration: 3000,
        color:'primary'

      });
      toast.present();
      return toast;
    }
    else{
    const toast = await this.ToastController.create({
      message:'el usuario no es valido ',
      duration: 3000,
      color:'primary'

    });
    toast.present();
    nombre.value="";
    password.value="";
    this.router.navigateByUrl('/usuario')
    return toast;
    }
  }
}
