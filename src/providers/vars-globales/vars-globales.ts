import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VarsGlobalesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VarsGlobalesProvider {
  private scriptLoaded;
  private slide = 0;
  constructor(public http: HttpClient) {
    console.log('Hello VarsGlobalesProvider Provider');
    this.scriptLoaded = false;
    
  }

  setScriptLoaded(value){
    this.scriptLoaded = value;
  }
  getScriptLoaded(){
    return this.scriptLoaded;
  }
  setSlide(value){
    this.scriptLoaded = value;
  }
  getSlide(){
    return this.scriptLoaded;
  }
  

  

}
