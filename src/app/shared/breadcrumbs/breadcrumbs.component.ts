import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{
  public titulo!: string;
  public tituloSubs$!: Subscription;
  constructor(private router: Router){ 
    this.tituloSubs$ = this.getArgumentosRuta().subscribe(data => {
                        this.titulo = data['titulo'];
                        document.title = `AdminPro - ${this.titulo}`;
    });

  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  private getArgumentosRuta(): Observable<any> {
    return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
  }
}
