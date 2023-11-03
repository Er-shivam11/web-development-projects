import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
URL="http://localhost:3000/task"
  constructor(private _http:HttpClient) { }
//for profile component
getProfile(){
  return this._http.get(this.URL);
}
//for register component 
regUser(data:any){
return this._http.post(this.URL,data);
}
//for update component 
getCurrentData(id:any){
return this._http.get(`${this.URL}/${id}`)
}


updateUser(id:any,data:any){
  return this._http.put(`${this.URL}/${id}`,data)
  }
  }