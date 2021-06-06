import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Epargne} from '../models/epargne';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpargneService {



 link = 'http://127.0.0.1:3000/net';
  constructor(private http: HttpClient) { }

  /*calclNet(Epargne: Epargne): Observable<>{
    return this.http.post(this.link);

  }*/

}

