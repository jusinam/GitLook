import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username = "string";
  private client_id = "6b94f580e9f01fb4dd66";
  private client_secret = "efcde45be31e4fe94664006f38d36d3a5e26f06a";

  constructor() { }
}
