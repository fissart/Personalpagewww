import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class Svc14MVService {

  constructor(private http: HttpClient) { }


  save(user:string, type: string ) {
      const fd = new FormData();
      fd.append('title', "Título");
      fd.append('description', "Breve  descripción");
      fd.append('user', user);
      fd.append('type', type);
      return this.http.post(`${environment.apiURL}/api/MV`, fd );
    }

    savve(user:string, type: string , subtype: string ) {
        const fd = new FormData();
        fd.append('title', "Título");
        fd.append('description', "Breve  descripción");
        fd.append('user', user);
        fd.append('type', type);
        fd.append('subtype', subtype);
        return this.http.post(`${environment.apiURL}/api/MV`, fd );
      }

      savvve(user:string, type: string , subtype: string, url: string ) {
          const fd = new FormData();
          fd.append('title', "Título");
          fd.append('description', "Breve  descripción");
          fd.append('user', user);
          fd.append('type', type);
          fd.append('subtype', subtype);
          fd.append('url', url);
          return this.http.post(`${environment.apiURL}/api/MV/Url`, fd );
        }


  getupdate(user:any) {
      console.log(user)
      return this.http.get<any>(`${environment.apiURL}/api/MV/${user}`);
    }

  update(id: string, title:string, description:string, archivo: File) {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('description', description);
      fd.append('image', archivo);
      return this.http.put(`${environment.apiURL}/api/MV/${id}`, fd, { reportProgress: true, observe: "events" });
    }

  gets(type : string) {
    console.log(type);
      return this.http.get<any>(`${environment.apiURL}/api/MV/controller/${type}`);
    }

gettts(type : string, idexpo : string) {
     return this.http.get<any>(`${environment.apiURL}/api/MV/contttroller/${type}/${idexpo}`);
    }

  remove(id: string ) {
      return this.http.delete(`${environment.apiURL}/api/MV/${id}`);
    }
}
