import { Component, OnDestroy } from '@angular/core';
import {
  Observable,
  Subscription,
  filter,
  interval,
  map,
  retry,
  take,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``,
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;

  ngOnDestroy(): void {
    this.intervalSubs?.unsubscribe();
  }

  constructor() {
    // this.retornaObservable()
    //   .pipe(retry(2))
    //   .subscribe({
    //     next: (value) => console.log('Subs:', value),
    //     error: (err) => console.warn(err),
    //     complete: () => console.info('Completado'),
    //   });

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  retornaIntervalo(): Observable<number> {
    return interval(500).pipe(
      take(10),
      map((valor) => valor + 1),
      filter((valor) => valor % 2 === 0)
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('Error');
        }
      }, 1000);
    });
  }
}
