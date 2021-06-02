import {Injectable, Pipe} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recette} from "./recette.model";
import {Observable} from "rxjs";
import {SERVER_PATH} from "../global";



@Injectable({
  providedIn: 'root'
})

export class RecetteService {
  constructor(private httpclient:HttpClient) { }

  public getRecettes():Observable<Recette[]>{
    return this.httpclient.get<Recette[]>(SERVER_PATH+'realisation');
  }
}
