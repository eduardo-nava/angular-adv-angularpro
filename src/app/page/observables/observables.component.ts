import { Component, OnDestroy, OnInit } from '@angular/core';
import { asyncScheduler, from, of , fromEvent, interval, range, concat,
   race, Observable, Subscription } from 'rxjs';
import { first, map, catchError, take, mapTo, concatMap, retry, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styles: [
  ]
})
export class ObservablesComponent implements OnInit, OnDestroy {

  public intervalSub: Subscription;

  constructor() {

    // OPERADORES DE CREACION
    /**
     * UTILIZANDO EL OPERADOR MAP
     */
    // of(1,2,3)
    // .pipe( map((x) => x * x) )
    // .subscribe( (v) => console.log(`value : ${ v }`) );


    /**
     * UTILIZANDO EL OPERADOR FIRST
     */

    // of(1,2,3)
    // .pipe(first())
    // .subscribe(x => console.log(`Primer valor ${ x }`));

    /**
     * 
     * EJEMPLO DEL OPERADOR AJAX
     */
    // const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
    //   map(userResponse => console.log('users: ', userResponse)),
    //   catchError(error => {
    //     console.log('error: ', error);
    //     return of(error);
    //   })
    // );
    // obs$.subscribe(data => console.log(data));

    /**
     * 
     * OPERADOR MAP  +  GETJSON
     */

    // const obj2 = ajax.getJSON(`https://api.github.com/users?per_page=5`)
    //   .pipe(
    //     map((userResponse) => console.log("user: ", userResponse)),
    //     catchError(err => {
    //       console.log("error: " , err);
    //       return of(err);
    //     })
    //   );

    // obj2.subscribe(data => console.log(data));

    /**
     * OPERADOR FROM
     */

    // const array = [10, 20, 30];

    // from(array)
    // .subscribe( x => console.log(x) );

    /**
     * 
     * OPERADOR FROM  + ASICRONO
     */
    
    // console.log("Inicio")
    // from(array, asyncScheduler)
    //   .subscribe(d => console.log(d));

    // console.log("Fin");

    /**
     * 
     * OPERADOR FROMEVENT
     */

    // const click = fromEvent(document, 'click')
    //   .subscribe(data => console.log(data));


    /**
     * 
     * OPERADOR INTERVAL
     */

      // const intervalo = interval(1000);
      // const tomaPrimerosCuatro = intervalo.pipe(take(5));

      // tomaPrimerosCuatro.subscribe( num => console.log(num) );


      /**
       * OPERADOR OF
       */

      // of(10, 20, 30).subscribe(
      //   next => console.log("next: ", next),
      //   err => console.log("error" , err),
      //   () => console.log(" el final")
      // )

      /**
       * OPERADOR RANGE
       */
    // const numeros = range(1,5);

    // numeros.subscribe({
    //   next: value => { 
    //     console.log("num", value);
    //   },
    //   complete: () =>{  console.log("Observable terminado") },
    //   error: err => { console.log("Error", err)}
    // })

    /**
     * OPERADOR CONCAT
     */
    // const timer = interval(1000).pipe(take(4));
    // const timer2 = interval(1000).pipe(take(3));

    // concat(timer, timer2).subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // )
    // const intervalo1 = interval(1000).pipe(mapTo("llegando Primero"));
    // const intervalo2 = interval(2000).pipe(mapTo("llegando segundo"));
    // const intervalo3 = interval(3000).pipe(mapTo("llegando tercero"));

    // race(intervalo1, intervalo2, intervalo3).subscribe(
    //   {
    //     next: ( (val) => console.log(val) ),
    //     complete: ( () => console.log("Terminado") )
    //   }
    // ).unsubscribe();

    // const click = fromEvent(document, 'click');

    // const result = click.pipe(
    //   concatMap( ev => interval(1000).pipe( take(4)) )
    // );


    // result.subscribe( d => {
    //   console.log(d);
    // })

    /**
     * OPERADORES DE TRANSFORMACION
     */

    /**
     * OPERADOR MAP
     */

    // fromEvent(document, 'click')
    // .pipe( map( doc => doc.target ))
    // .subscribe(x => console.log(x));

    /**
     * OPERADOR MAPTO
     */
    
    // fromEvent(document, 'click')
    // .pipe( mapTo(["Hola Lalo", "Programacion"]))
    // .subscribe(x => {
    //   console.log(x);
    // })

    //this.getUsuarios();
    
    
    // this.obtenerObservable()
    // .pipe(
    //   retry(1)
    // )
    // .subscribe( 
    //   observer => console.log(observer),
    //   error => console.log(error),
    //   () => console.log("Terminado")
    // )

    this.intervalSub = this.obtenerIntervalo()
        .subscribe( data => console.log(data));

   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.intervalSub.unsubscribe();
  }
  

  getUsuarios(){
    fetch("https://dummy.restapiexample.com/api/v1/employees")
    .then(data => console.log(data));
  }

  obtenerObservable() : Observable<number> {
    var i = 0;
    return new Observable<number>( function subscribe(subscriber){
      const intervalo = setInterval( function() {
        i++;
        subscriber.next(i);
        if (i == 5) {
          subscriber.complete();
          clearInterval(intervalo);
        }
        if( i == 2){
          subscriber.error("Ha ocurrido un error");
        }

      }, 1000 )

    });
  }


  obtenerIntervalo() : Observable<number> {
    return interval(500)
            .pipe( 
                    map( value => value + 1),
                    filter( data => (data % 2) == 0 ? true: false),
                    take(4)
                  );
  }

}
