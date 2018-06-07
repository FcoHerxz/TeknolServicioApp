import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeknolServiceProvider } from '../../providers/teknol-service/teknol-service';
import { VarsGlobalesProvider } from '../../providers/vars-globales/vars-globales';

import { AlertController } from 'ionic-angular';
import { ListPage } from '../list/list';


/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
  providers: [TeknolServiceProvider, VarsGlobalesProvider]
})
export class UpdatePage {
  ubicacion;
  tecnico;
  modelo;
  servicio; 
  id;
  teknol;
  constructor(public navCtrl: NavController, public params: NavParams, public servicios: TeknolServiceProvider, public varsGlobalesProvider: VarsGlobalesProvider, public alertCtrl: AlertController) {
  
  this.loadData()  
    
  if(params.get("id") != null){
    this.id = params.get("id");
    this.loadSlideData();
  }
  
  }

  loadData(){
    this.servicios.getAll()
    .then(
      data => {
        console.log(data);
        this.teknol = data;
        
      }
    )
    .catch(
      error =>{
        console.log(error);
      }
    )
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  loadSlideData(){
    this.servicios.getOne(this.id)
    .then(
      data => {
        console.log(data[0]);
        this.ubicacion = data[0]["ubicacion"];
        this.tecnico = data[0]["tecnico"];
        this.modelo = data[0]["modelo"];
        this.servicio = data[0]["servicio"];
      }
    )
    .catch(
      error =>{
        console.log(error);
      }
    )
  }

  guardar(){
    var now = new Date();
  var datos = {};
  datos["id"] = this.id;
  datos["ubicacion"] = this.ubicacion;
  datos["tecnico"] = this.tecnico;
  datos["modelo"] = this.modelo;
  datos["servicio"] = this.servicio;

  
  this.servicios.update(datos)
  
  this.navCtrl.push(ListPage);
 

 /* .then(
    data => {
      console.log(data);
      if(data["response"] == "ok"){
        let alert = this.alertCtrl.create(
          {
            title:"Aviso",
            subTitle:"Registro modificado correctamente",
            buttons:["OK"]
             
          }
        );
        alert.present();
       
      }
    }
  )
  .catch(
    error => {
      console.log(error);
    }
  )
  */
  
  }


}
