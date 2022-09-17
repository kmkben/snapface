import { Component, OnInit} from '@angular/core';
import { filter, interval, map, Observable } from 'rxjs';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  //interval$!: Observable<string>;

  ngOnInit(): void {
    /*this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? `My value is ${value} and it's even` : `My value is ${value} and it's odd`)
    );*/ 
  }

 
}
