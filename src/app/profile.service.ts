import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username = "string";
  private client_id = "26ef02a58b779e12be59";
  private client_secret = "3d5fb1c5bcad1b44ddb7f4c3da420b3c1eaab7e4";

  constructor(private http:HttpClient) {

    console.log("Service Initiated Successfully");
    this.username = "DjCooGie";

   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.client_id + "&client_secret=" + this.client_secret)

    .pipe(map(res => res));
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)

    .pipe(map(res => res));

  }
  updateProfile(username:string){
    this.username = username;
  }
}
