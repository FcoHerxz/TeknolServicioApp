import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeknolServiceProvider } from '../../providers/teknol-service/teknol-service';
import { VarsGlobalesProvider } from '../../providers/vars-globales/vars-globales';
import { AlertController } from 'ionic-angular';

import { ListPage } from '../list/list';

//import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
  providers: [TeknolServiceProvider, VarsGlobalesProvider]
  
})
export class AddPage {
latitud;
longitud;
ubicacion;
tecnico;
modelo;
servicio;
teknol;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicios: TeknolServiceProvider, public varsGlobalesProvider: VarsGlobalesProvider, public alertCtrl: AlertController) {
  //this.loadPosition();
  this.ubicacion="";
  this.tecnico="";
  this.modelo="";
  this.servicio="";
  this.loadData()
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

  

/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  loadPosition(){
    var __this = this;
    Geolocation.getCurrentPosition()
          .then(
            (position) => {
                this.latitud = position.coords.latitude;
                this.longitud = position.coords.longitude;

            },
            (err) =>{
              console.log(err);
            }
          )
  }
*/

guardar(){
  var now = new Date();
var datos = {};
datos["ubicacion"] = this.ubicacion;
datos["tecnico"] = this.tecnico;
datos["modelo"] = this.modelo;
datos["servicio"] = this.servicio;
datos["latitud"] = this.latitud;
datos["longitud"] = this.longitud;
datos["fecha"] = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
this.navCtrl.push(ListPage);



this.servicios.add(datos)
.then(
  data => {
    console.log(data);
    if(data["response"] == "ok"){
        let alert = this.alertCtrl.create(
            {
              title:"Aviso",
              subTitle: "Registro añadido",
              buttons: ["OK"]
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
}

}






