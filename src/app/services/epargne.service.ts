import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Epargne} from '../models/epargne';

@Injectable({
  providedIn: 'root'
})
export class EpargneService {
  private epargne: Epargne;

  constructor(private http: HttpClient) { }

}
