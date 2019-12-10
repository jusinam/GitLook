import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username = "string";
  private client_id = "6b94f580e9f01fb4dd66";
  private client_secret = "efcde45be31e4fe94664006f38d36d3a5e26f06a";

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
