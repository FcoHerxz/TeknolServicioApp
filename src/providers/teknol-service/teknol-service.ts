import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TeknolServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeknolServiceProvider {

  remove(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(public http: HttpClient) {
    console.log('Hello TeknolServiceProvider Provider');
  }
    
        //   CAMBIAR LOCALHOST POR LINK DE SERVIDOR   //


  getAll(){
    return new Promise(
           resolve=>{
               this.http.get("http://localhost/teknol/all")
               
               .subscribe(
                 data =>{
                   resolve(data);
 
                 },
                 err=>{
                   console.log(err);
                 }
               )
            }
          );
       }

      //   CAMBIAR LOCALHOST POR LINK DE SERVIDOR   //

add(data){
  return new Promise(
         resolve=>{
             this.http.post("http://localhost/teknol/add", data)
             
             .subscribe(
               data =>{
                 resolve(data);

               },
               err=>{
                 console.log(err);
               }
             )
          }
        );
     }

     //   CAMBIAR LOCALHOST POR LINK DE SERVIDOR   //

     update(data){
      return new Promise(
             resolve=>{
                 this.http.put("http://localhost/teknol/update", data)
                 
                 .subscribe(
                   data =>{
                     resolve(data);
   
                   },
                   err=>{
                     console.log(err);
                   }
                 )
              }
            );
         }
      //   CAMBIAR LOCALHOST POR LINK DE SERVIDOR   //

         delete(id){
          return new Promise(
                 resolve=>{
                     //this.http.delete("http://localhost/teknol/delete/"+id)
                     this.http.delete("http://localhost/teknol/delete/"+id)
                     .subscribe(
                       data =>{
                         resolve(data);
       
                       },
                       err=>{
                         console.log(err);
                       }
                     )
                  }
                );
             }
            
             //   CAMBIAR LOCALHOST POR LINK DE SERVIDOR   //


             getOne(id){
              return new Promise(
                     resolve=>{
                         this.http.get("http://localhost/teknol/one/"+id)
                         
                         .subscribe(
                           data =>{
                             resolve(data);
           
                           },
                           err=>{
                             console.log(err);
                           }
                         )
                      }
                    );
                 }

                 



}
