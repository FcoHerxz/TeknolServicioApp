import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeknolServiceProvider } from '../../providers/teknol-service/teknol-service';
import { VarsGlobalesProvider } from '../../providers/vars-globales/vars-globales';
import { HomePage } from '../home/home';

import { AddPage } from '../add/add';
import { UpdatePage } from '../update/update';
import { NosotrosPage } from '../nosotros/nosotros';

import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [TeknolServiceProvider, VarsGlobalesProvider]
})
export class ListPage {
  teknol;
  id;
 estado;
 http;

 
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicios: TeknolServiceProvider, public varsGlobalesProvider: VarsGlobalesProvider, public alertCtrl: AlertController) {
    
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

  goHome(index){
console.log(index);
this.varsGlobalesProvider.setSlide(index);
this.navCtrl.push(HomePage);

  }

  goUpdate(index){
    console.log(index);
    this.navCtrl.push(UpdatePage, {id:index});
  }
  
  
  delete(index){
    this.id = index;
    this.showPrompt();
    console.log(index);
  }
  
  showPrompt(){
    var __this = this;
      let prompt = this.alertCtrl.create(
          {
            title: "Aviso",
            message: "Seguro que quiere borrar este registro?",
            buttons:[
              {
                text: "Cancelar",
                handler: data =>{
                }
              },
              {
                text: "Borrar",
                handler: data =>{
                  __this.borrar();
                }
              }
            ]
          }
        );
      
      prompt.present();
  }

  borrar(){
   

    this.servicios.delete(this.id)
          .then(
            data => {
              console.log(data[0]);
              this.loadData();
            }
          )
          .catch(
            error => {
              console.log(error);
            }
          )
  }


  btnAgregar(){
    this.navCtrl.push(AddPage);
  }

  btnrecargar(){
    this.loadData();

  }





}
    


   
   
  
  




  




