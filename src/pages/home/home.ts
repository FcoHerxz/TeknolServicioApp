import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeknolServiceProvider } from '../../providers/teknol-service/teknol-service';
import { VarsGlobalesProvider } from '../../providers/vars-globales/vars-globales';
import { Slides } from 'ionic-angular';
import { GESTURE_PRIORITY_TOGGLE } from 'ionic-angular/gestures/gesture-controller';


//declare var google: any


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TeknolServiceProvider, VarsGlobalesProvider]
 
})
export class HomePage {
teknol;
@ViewChild('mySlider') slider;
lat;
long;

slideIndex;
mySlideOptions; 
start = true;

  constructor(public navCtrl: NavController, public servicios: TeknolServiceProvider, 
    public varsGlobalesProvider: VarsGlobalesProvider) {



    this.mySlideOptions = {
      initialSlide: this.varsGlobalesProvider.getScriptLoaded()
    }


    this.servicios.getAll()
    .then(
      data => {
        console.log(data);
        this.teknol = data;
        this.loadSlideData(this.varsGlobalesProvider.getSlide());
      }
    )
    .catch(
      error =>{
        console.log(error);
      }
    )
      
    /*    if(!this.varsGlobalesProvider.getScriptLoaded()){
        var __this = this;
        var script = document.createElement("script");
        script.src = "http://maps.google.com/maps/api/js?key=AIzaSyD3KOTm8OJSm6DKazxmDIkRGtNQaAkNdrA"
        script.onload = function(){
          __this.varsGlobalesProvider.setScriptLoaded(true);
        }
        document.head.appendChild(script);
      }
      */  


  }


  onSlideChanged(){
    if(!this.start){
      let currentIndex = this.slider.getActiveIndex();
      this.loadSlideData(currentIndex);
    }else{
      this.start = false;
    }
    
   
  }

  loadSlideData(index){
    var datos = this.teknol[index]
    this.servicios.getOne(datos.id)
    .then( 
      data => {
        console.log(data[0]);
        this.lat = data[0]["latitud"];
        this.long = data[0]["longitud"];
      }
    )
    .catch(
      error =>{
        console.log(error);
      }
    )
  }

/*
  openMap(index){
    if(!this.varsGlobalesProvider.getScriptLoaded()){
      var position ={coords: {latitude: this.lat, longitude:this.long}};
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    

      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP

      }

      var map = new google.maps.Map(document.getElementById("map"+index), mapOptions);

  }else{
    console.log("el script estaba ya cargado")
  }
  }
*/
}

