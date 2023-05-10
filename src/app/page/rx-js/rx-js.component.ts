import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take,map,filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css']
})
export class RxJsComponent implements OnDestroy {

  public intervalSubs!: Subscription;

  constructor(){
    
    
    /* this.retornaObservable().pipe(
      retry()
    ).subscribe(
      valor => console.log('Subs',valor),
      (err) => console.warn('Error', err),
      () => console.info('obs terminado')
    ) */
      this.intervalSubs = this.retornaIntervalo().subscribe(
        console.log
      )

  }
  ngOnDestroy(): void {
  }
  retornaIntervalo(): Observable<number>{
    return interval(500)
    .pipe(
      map(valor => valor + 1),
      filter(valor => (valor % 2 === 0 ) ? true : false),
      take(4)
      )
  }
  retornaObservable(): Observable<number>{
    let i = -1;
      const obs$ = new Observable<number>( observer => {
        
        const intervalo = setInterval(() => {
          i++;
          observer.next(i)
          if( i === 4 ){
            clearInterval(intervalo);
            observer.complete
          }

          if(i === 2){
            observer.error('i llego a 2')
          }
        },1000)
      });
      return obs$;
  }

}
