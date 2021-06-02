import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse} from "@angular/common/http";
import {Message} from "./message.model";
import { Observable} from "rxjs";
import {SERVER_PATH} from "../global";


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  SERVER_URL = SERVER_PATH+'contactMessage';

  private HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json',

  });

  constructor(private http: HttpClient ) {}

  postContactForm(Message: Message) : Observable<HttpResponse<Message>> {
    return this.http.post<Message>(this.SERVER_URL, Message, {observe: 'response'});
  }
}
