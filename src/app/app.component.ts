import { Component } from '@angular/core';
import { ParametrosService } from './parametros.service';
interface pais {name: string, region: string,poblacion:number}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe-angular';
  max:number=0; min:number=0
   
  paises: pais[] = [
    { name: 'UK', region: 'oeste', poblacion: 5000000 },
    { name: 'UK', region: 'este', poblacion: 3000000 },
    { name: 'UK', region: 'norte', poblacion: 1000000 },
    { name: 'UK', region: 'sur', poblacion: 100000000 },
    { name: 'HK', region: 'oeste', poblacion: 700000 },
    { name: 'HK', region: 'este', poblacion: 2000000 },
    { name: 'HK', region: 'norte', poblacion: 500000 },
    { name: 'HK', region: 'sur', poblacion: 4000000 },

  ];
  constructor( private serviceParam:ParametrosService){}
  cambiamax(valor:any){
    this.serviceParam.updatedDataMax(valor);
    console.log('this.max=valor',valor)
  }
  cammbiamin(valor:any){
    this.serviceParam.updatedDataMin(valor);
   
    console.log('this.min=valor',valor)
  }


  findInterval(country: pais, max: number, min: number): any {
    console.log('findInterval', max, min)
    return country.poblacion <= max && country.poblacion >= min
  }

    

}
