import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  addData(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }


  saveData(data: any) {
    // Make a POST request to save data
    return this.http.post("https://localhost:7069/api/User/createUser", data, { responseType: "text" });

  }

  getData() {
    return this.http.get("https://localhost:7069/api/User/getUser");
  }
}


